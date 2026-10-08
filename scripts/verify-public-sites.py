#!/usr/bin/env python3
"""Install and production-build every public-website app in the 50-template pack."""
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
import json
import os
import shutil
import subprocess
import time

ROOT = Path(__file__).resolve().parents[1]
PACK = ROOT / "premium-50-template-v5"
CATALOG = ROOT / "catalog/assets/templates.json"
OUTPUT = ROOT / "validation/public-site-builds.json"
WORKERS = 3
TIMEOUT = 300

def build(item):
    project = PACK / item["id"] / "public-website"
    env = os.environ.copy()
    env.update({"NEXT_TELEMETRY_DISABLED": "1", "CI": "1"})
    started = time.monotonic()
    try:
        install = subprocess.run(
            ["npm", "install", "--no-audit", "--no-fund", "--no-package-lock"],
            cwd=project, env=env, stdout=subprocess.PIPE, stderr=subprocess.STDOUT,
            text=True, timeout=TIMEOUT,
        )
        if install.returncode:
            return item["id"], False, round(time.monotonic() - started, 1), install.stdout[-4000:]
        result = subprocess.run(
            ["npm", "run", "build"], cwd=project, env=env,
            stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True, timeout=TIMEOUT,
        )
        return item["id"], result.returncode == 0, round(time.monotonic() - started, 1), result.stdout[-4000:]
    except Exception as exc:
        return item["id"], False, round(time.monotonic() - started, 1), str(exc)


def main():
    templates = json.loads(CATALOG.read_text())
    if len(templates) != 50 or len({t["id"] for t in templates}) != 50:
        raise SystemExit("Expected exactly 50 unique template records")
    started = time.monotonic()
    results = []
    with ThreadPoolExecutor(max_workers=WORKERS) as pool:
        futures = [pool.submit(build, item) for item in templates]
        for future in as_completed(futures):
            name, passed, duration, output = future.result()
            results.append({"template": name, "passed": passed, "seconds": duration,
                            "tail": output[-1200:]})
            print(f"[{len(results)}/50] {name}: {'PASS' if passed else 'FAIL'} ({duration:.0f}s)", flush=True)
    results.sort(key=lambda r: r["template"])
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    summary = {"framework": "Next.js 15.5.27", "react": "18.3.1", "total": 50,
               "passed": sum(r["passed"] for r in results),
               "failed": [r["template"] for r in results if not r["passed"]],
               "elapsed_seconds": round(time.monotonic() - started, 1), "results": results}
    OUTPUT.write_text(json.dumps(summary, indent=2) + "\n")
    for item in templates:
        project = PACK / item["id"] / "public-website"
        shutil.rmtree(project / "node_modules", ignore_errors=True)
        shutil.rmtree(project / ".next", ignore_errors=True)
        (project / "package-lock.json").unlink(missing_ok=True)
    print(f"\nFINAL {summary['passed']}/50 passed; report: {OUTPUT}", flush=True)
    if summary["failed"]:
        raise SystemExit(1)

if __name__ == "__main__":
    main()
