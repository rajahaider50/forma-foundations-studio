"use client";
import Link from "next/link";
export default function Page(){return <main className="mx-auto min-h-screen max-w-6xl px-6 py-16"><div className="glass rounded-3xl p-8"><p className="text-xs uppercase tracking-[.3em] text-cyan-300">Admin Document Editor</p><h1 className="mt-3 text-4xl font-black gradient">Settings</h1><p className="mt-4 text-white/60">Reusable production-pattern surface for Document Editor. Local-first mode keeps real application state in the browser until a client API is connected.</p><div className="mt-8 flex flex-wrap gap-3"><Link className="rounded-full bg-white px-5 py-3 font-bold text-black" href="/dashboard">Open dashboard</Link><Link className="glass rounded-full px-5 py-3" href="/settings">Settings</Link></div></div></main>}

