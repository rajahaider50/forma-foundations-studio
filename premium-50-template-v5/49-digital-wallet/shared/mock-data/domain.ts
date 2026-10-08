import type {DomainEntity} from "../domain";
export const domainSeed:DomainEntity[]=[
  {id:'accounts-1',module:'accounts',title:'Accounts demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'transfers-1',module:'transfers',title:'Transfers demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'transactions-1',module:'transactions',title:'Transactions demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
];
export function seedFor(module:string){return domainSeed.filter(x=>x.module===module)}
