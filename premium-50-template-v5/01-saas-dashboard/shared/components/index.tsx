'use client';
import React from 'react';
export function GlassCard({children,title}:{children:React.ReactNode;title?:string}){return <section className="rounded-2xl border border-white/10 bg-white/[.04] p-5 shadow-2xl backdrop-blur-xl">{title&&<h2 className="mb-4 text-lg font-semibold">{title}</h2>}{children}</section>}
export function StateView({kind,message}:{kind:'loading'|'empty'|'error'|'success';message:string}){return <div role={kind==='error'?'alert':'status'} className="rounded-xl border border-white/10 p-6 text-sm text-slate-300">{message}</div>}
export function ConfirmAction({onConfirm,label='Delete'}:{onConfirm:()=>void;label?:string}){return <button type="button" className="rounded-lg border border-red-400/30 px-3 py-2 text-sm text-red-300" onClick={()=>{if(globalThis.confirm?.('Confirm action?'))onConfirm()}}>{label}</button>}
