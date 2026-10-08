import type {DomainEntity} from "../domain";
export const domainSeed:DomainEntity[]=[
  {id:'threads-1',module:'threads',title:'Threads demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'messages-1',module:'messages',title:'Messages demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'attachments-1',module:'attachments',title:'Attachments demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
];
export function seedFor(module:string){return domainSeed.filter(x=>x.module===module)}
