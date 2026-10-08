import type {DomainEntity} from "../domain";
export const domainSeed:DomainEntity[]=[
  {id:'workouts-1',module:'workouts',title:'Workouts demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'goals-1',module:'goals',title:'Goals demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'progress-1',module:'progress',title:'Progress demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
];
export function seedFor(module:string){return domainSeed.filter(x=>x.module===module)}
