import {domainSeed} from "../mock-data/domain";
import type {DomainEntity} from "../domain";
export interface Repository { list(module:string,q?:string):Promise<DomainEntity[]>; create(input:Omit<DomainEntity,"id"|"createdAt"|"updatedAt">):Promise<DomainEntity>; update(id:string,patch:Partial<DomainEntity>):Promise<DomainEntity>; remove(id:string):Promise<void> }
const KEY="premium-template:repository:v5";
const canStore=()=>typeof globalThis!="undefined" && typeof (globalThis as any).localStorage!="undefined";
function loadSeed():DomainEntity[]{return domainSeed.map(x=>({...x}));}
export class LocalRepository implements Repository {
  private rows:DomainEntity[];
  constructor(){
    if(canStore()) { try { const raw=(globalThis as any).localStorage.getItem(KEY); this.rows=raw?JSON.parse(raw):loadSeed(); } catch { this.rows=loadSeed(); } }
    else this.rows=loadSeed();
  }
  private persist(){if(canStore()) (globalThis as any).localStorage.setItem(KEY,JSON.stringify(this.rows));}
  async list(module:string,q=""){const needle=q.trim().toLowerCase();return this.rows.filter(x=>x.module===module&&(!needle||x.title.toLowerCase().includes(needle))).sort((a,b)=>b.updatedAt.localeCompare(a.updatedAt));}
  async create(input:any){const now=new Date().toISOString();const row={...input,id:crypto.randomUUID(),createdAt:now,updatedAt:now} as DomainEntity;this.rows.unshift(row);this.persist();return row;}
  async update(id:string,patch:any){const i=this.rows.findIndex(x=>x.id===id);if(i<0)throw new Error("NOT_FOUND");this.rows[i]={...this.rows[i],...patch,updatedAt:new Date().toISOString()};this.persist();return this.rows[i];}
  async remove(id:string){const before=this.rows.length;this.rows=this.rows.filter(x=>x.id!==id);if(before===this.rows.length)throw new Error("NOT_FOUND");this.persist();}
}
// Backward-compatible test name. Production UI uses the same real local persistence implementation.

export class MockRepository extends LocalRepository {}
