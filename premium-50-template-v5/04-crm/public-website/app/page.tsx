"use client";
import {useMemo,useState} from "react";
import {motion} from "framer-motion";
import {Bell,Search,Plus,ArrowUpRight,Menu,X,ShieldCheck} from "lucide-react";
const modules=["contacts", "leads", "notes", "pipelines"];
const nav=["Overview", "Features", "Solutions", "Pricing", "Case Studies", "FAQ", "Contact"];
export default function Page(){
 const [query,setQuery]=useState(""); const [mobile,setMobile]=useState(false);
 const [items,setItems]=useState(modules.map((name,i)=>({id:i+1,name,status:i%3===0?"Active":"Ready"})));
 const filtered=useMemo(()=>items.filter(x=>x.name.toLowerCase().includes(query.toLowerCase())),[items,query]);
 return <main className="min-h-screen overflow-hidden">
  <div className="fixed inset-0 pointer-events-none opacity-40"><div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl"/><div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl"/></div>
  <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
   <div className="text-xl font-black"><span className="gradient">CRM</span></div>
   <nav className="hidden gap-6 text-sm text-white/65 md:flex">{nav.map(x=><a key={x} href="#content" className="hover:text-white transition">{x}</a>)}</nav>
   <button onClick={()=>setMobile(!mobile)} className="glass rounded-xl p-2 md:hidden">{mobile?<X/>:<Menu/>}</button>
  </header>
  {mobile&&<div className="relative z-20 mx-5 mb-4 grid gap-2 rounded-2xl glass p-4 md:hidden">{nav.map(x=><a key={x} href="#content" className="rounded-xl p-3 hover:bg-white/5">{x}</a>)}</div>}
  <section className="relative z-10 mx-auto max-w-7xl px-5 pb-16 pt-16 md:pt-24">
   <p className="mb-4 text-xs font-bold uppercase tracking-[.3em] text-accent">Premium public experience</p>
   <h1 className="max-w-5xl text-5xl font-black leading-[.98] md:text-8xl">Build, operate and scale <span className="gradient">CRM</span>.</h1>
   <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">A professional foundation with typed data boundaries, responsive surfaces, validation and a dedicated admin experience.</p>
   <div className="mt-8 flex flex-wrap gap-3"><button className="rounded-full bg-white px-6 py-3 font-bold text-black hover:scale-[1.03] transition">Launch workspace</button><button className="glass rounded-full px-6 py-3 font-semibold hover:bg-white/10 transition">Explore modules <ArrowUpRight className="ml-2 inline h-4 w-4"/></button></div>
  </section>
  <section id="content" className="relative z-10 mx-auto max-w-7xl px-5 pb-20">
   <div className="mb-5 flex items-center gap-3 rounded-2xl glass px-4 py-3"><Search className="h-4 w-4 text-white/40"/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search modules..." className="w-full bg-transparent outline-none placeholder:text-white/30"/><Bell className="h-4 w-4 text-white/40"/></div>
   <div className="grid gap-4 md:grid-cols-3">{filtered.map((item,i)=><motion.article key={item.id} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.04}} className="glass rounded-3xl p-6 shadow-2xl">
    <div className="mb-8 flex items-center justify-between"><div className="rounded-2xl bg-white/10 p-3"><ShieldCheck className="h-5 w-5"/></div><span className="text-xs text-emerald-300">{item.status}</span></div>
    <h2 className="text-xl font-bold capitalize">{item.name}</h2><p className="mt-2 text-sm leading-6 text-white/50">Typed workflow, polished states and extensible service boundaries.</p>
   </motion.article>)}</div>
  </section>
  <section className="relative z-10 mx-auto max-w-7xl px-5 pb-24"><div className="glass rounded-3xl p-6 flex items-center justify-between gap-4">
   <div><h3 className="font-bold">Command center</h3><p className="text-sm text-white/50">Connect this surface to the included API for live data.</p></div>
   <button onClick={()=>setItems(x=>[...x,{id:Date.now(),name:"new module",status:"Draft"}])} className="rounded-2xl bg-white px-4 py-3 font-bold text-black"><Plus className="mr-2 inline h-4 w-4"/>Add</button>
  </div></section>
 </main>
}