import type {DomainEntity} from "../domain";
export const domainSeed:DomainEntity[]=[
  {id:'shipments-1',module:'shipments',title:'Shipments demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'tracking-1',module:'tracking',title:'Tracking demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'dispatch-1',module:'dispatch',title:'Dispatch demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
];
export function seedFor(module:string){return domainSeed.filter(x=>x.module===module)}
