import type {DomainEntity} from "../domain";
export const domainSeed:DomainEntity[]=[
  {id:'workspaces-1',module:'workspaces',title:'Workspaces demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'projects-1',module:'projects',title:'Projects demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'tasks-1',module:'tasks',title:'Tasks demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'analytics-1',module:'analytics',title:'Analytics demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
];
export function seedFor(module:string){return domainSeed.filter(x=>x.module===module)}
