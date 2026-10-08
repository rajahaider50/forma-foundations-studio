import type {DomainEntity} from "../domain";
export const domainSeed:DomainEntity[]=[
  {id:'clients-1',module:'clients',title:'Clients demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'invoices-1',module:'invoices',title:'Invoices demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'payments-1',module:'payments',title:'Payments demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
];
export function seedFor(module:string){return domainSeed.filter(x=>x.module===module)}
