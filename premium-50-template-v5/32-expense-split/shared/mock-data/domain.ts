import type {DomainEntity} from "../domain";
export const domainSeed:DomainEntity[]=[
  {id:'groups-1',module:'groups',title:'Groups demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'expenses-1',module:'expenses',title:'Expenses demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'balances-1',module:'balances',title:'Balances demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
];
export function seedFor(module:string){return domainSeed.filter(x=>x.module===module)}
