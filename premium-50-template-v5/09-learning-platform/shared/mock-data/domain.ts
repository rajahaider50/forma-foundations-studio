import type {DomainEntity} from "../domain";
export const domainSeed:DomainEntity[]=[
  {id:'courses-1',module:'courses',title:'Courses demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'lessons-1',module:'lessons',title:'Lessons demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'quizzes-1',module:'quizzes',title:'Quizzes demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'progress-1',module:'progress',title:'Progress demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
];
export function seedFor(module:string){return domainSeed.filter(x=>x.module===module)}
