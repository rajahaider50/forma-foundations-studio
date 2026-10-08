import type {DomainEntity} from "../domain";
export const domainSeed:DomainEntity[]=[
  {id:'threads-1',module:'threads',title:'Threads demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'prompts-1',module:'prompts',title:'Prompts demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'usage-1',module:'usage',title:'Usage demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
];
export function seedFor(module:string){return domainSeed.filter(x=>x.module===module)}
