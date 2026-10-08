const fs=require('fs'),path=require('path'),ts=require('typescript');
const root=process.cwd();const cat=JSON.parse(fs.readFileSync(path.join(root,'catalog.json'),'utf8'));
const surfaces=['public-website','user-web-app','user-android','admin-website','admin-web-app','admin-android','backend'];
const shared=['types','validation','mock-data','mock-services','api-client','auth','state','components'];
const required=['docs/FEATURE-MATRIX.md','docs/INTEGRATION-CONTRACTS.md','tests/acceptance.md','backend/src/providers.ts','backend/src/rbac.ts','backend/src/rate-limit.ts','backend/src/audit.ts','backend/src/auth-routes.ts','backend/src/provider-routes.ts','backend/prisma/schema.prisma'];
let failures=[];let tsFiles=[];
function walk(d){for(const e of fs.readdirSync(d,{withFileTypes:true})){if(['node_modules','.next','dist'].includes(e.name))continue;const p=path.join(d,e.name);if(e.isDirectory())walk(p);else if(/\.(ts|tsx)$/.test(e.name))tsFiles.push(p)}}
for(const t of cat){const b=path.join(root,t.id);for(const s of surfaces)if(!fs.existsSync(path.join(b,s)))failures.push(`${t.id}: missing ${s}`);for(const s of shared)if(!fs.existsSync(path.join(b,'shared',s)))failures.push(`${t.id}: missing shared/${s}`);for(const f of required)if(!fs.existsSync(path.join(b,f)))failures.push(`${t.id}: missing ${f}`)}
walk(root);let parseErrors=[];for(const f of tsFiles){const s=fs.readFileSync(f,'utf8');const sf=ts.createSourceFile(f,s,ts.ScriptTarget.Latest,true,f.endsWith('.tsx')?ts.ScriptKind.TSX:ts.ScriptKind.TS);if(sf.parseDiagnostics.length)parseErrors.push(f)}
console.log(JSON.stringify({templates:cat.length,surfacesPerTemplate:7,contractPass:failures.length===0,contractFailures:failures.length,tsFiles:tsFiles.length,parseErrors:parseErrors.length,parseErrorFiles:parseErrors},null,2));process.exit(failures.length||parseErrors.length?1:0);
