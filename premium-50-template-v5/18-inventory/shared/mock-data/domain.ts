import type {DomainEntity} from "../domain";
export const domainSeed:DomainEntity[]=[
  {id:'items-1',module:'items',title:'Items demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'warehouses-1',module:'warehouses',title:'Warehouses demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'stock-1',module:'stock',title:'Stock demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
];
export function seedFor(module:string){return domainSeed.filter(x=>x.module===module)}
