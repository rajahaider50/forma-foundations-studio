"use client";
import {useEffect,useState} from "react";
import {DataTable} from "../components/DataTable";
import {api} from "../lib/workflow";
export default function Page(){const [rows,setRows]=useState<any[]>([]);const [state,setState]=useState("loading");useEffect(()=>{api.list().then(x=>{setRows(x.data);setState("ready")}).catch(()=>setState("error"))},[]);return <main className="min-h-screen px-5 py-16"><div className="mx-auto max-w-7xl"><p className="text-xs uppercase tracking-[.3em] text-cyan-300">Premium workspace</p><h1 className="mt-3 text-5xl font-black gradient">Social Feed</h1><p className="mt-4 max-w-2xl text-white/55">Complete local-mode workflow with typed repository boundaries. Connect the included backend when moving from demo to live data.</p>{state==="loading"&&<div className="mt-10 h-72 animate-pulse rounded-3xl bg-white/5"/>}{state==="error"&&<div className="mt-10 glass rounded-3xl p-6 text-rose-200">Unable to load data. Retry after checking the API/demo provider.</div>}{state==="ready"&&<div className="mt-10"><DataTable rows={rows} onDelete={async id=>{await api.remove(id);setRows(r=>r.filter(x=>x.id!==id))}}/></div>}</div></main>}

