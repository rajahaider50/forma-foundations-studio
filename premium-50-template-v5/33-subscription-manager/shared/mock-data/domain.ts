import type {DomainEntity} from "../domain";
export const domainSeed:DomainEntity[]=[
  {id:'subscriptions-1',module:'subscriptions',title:'Subscriptions demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'renewals-1',module:'renewals',title:'Renewals demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'billing-1',module:'billing',title:'Billing demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
];
export function seedFor(module:string){return domainSeed.filter(x=>x.module===module)}
