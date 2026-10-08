import type {DomainEntity} from "../domain";
export const domainSeed:DomainEntity[]=[
  {id:'projects-1',module:'projects',title:'Projects demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'caseStudies-1',module:'case-studies',title:'CaseStudies demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'leads-1',module:'leads',title:'Leads demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
];
export function seedFor(module:string){return domainSeed.filter(x=>x.module===module)}
