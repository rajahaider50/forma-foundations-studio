import type {DomainEntity} from "../domain";
export const domainSeed:DomainEntity[]=[
  {id:'students-1',module:'students',title:'Students demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'attendance-1',module:'attendance',title:'Attendance demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'grades-1',module:'grades',title:'Grades demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
];
export function seedFor(module:string){return domainSeed.filter(x=>x.module===module)}
