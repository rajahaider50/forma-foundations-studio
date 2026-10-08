import type {DomainEntity} from "../domain";
export const domainSeed:DomainEntity[]=[
  {id:'vault-1',module:'vault',title:'Vault demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'items-1',module:'items',title:'Items demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'sharing-1',module:'sharing',title:'Sharing demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
];
export function seedFor(module:string){return domainSeed.filter(x=>x.module===module)}
