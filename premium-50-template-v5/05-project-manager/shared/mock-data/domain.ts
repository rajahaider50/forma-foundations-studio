import type {DomainEntity} from "../domain";
export const domainSeed:DomainEntity[]=[
  {id:'projects-1',module:'projects',title:'Projects demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'tasks-1',module:'tasks',title:'Tasks demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'kanban-1',module:'kanban',title:'Kanban demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'calendar-1',module:'calendar',title:'Calendar demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
];
export function seedFor(module:string){return domainSeed.filter(x=>x.module===module)}
