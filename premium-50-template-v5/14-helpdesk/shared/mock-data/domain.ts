import type {DomainEntity} from "../domain";
export const domainSeed:DomainEntity[]=[
  {id:'tickets-1',module:'tickets',title:'Tickets demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'agents-1',module:'agents',title:'Agents demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'knowledgebase-1',module:'knowledgebase',title:'Knowledgebase demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
];
export function seedFor(module:string){return domainSeed.filter(x=>x.module===module)}
