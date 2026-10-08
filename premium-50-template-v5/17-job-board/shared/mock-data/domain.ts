import type {DomainEntity} from "../domain";
export const domainSeed:DomainEntity[]=[
  {id:'jobs-1',module:'jobs',title:'Jobs demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'companies-1',module:'companies',title:'Companies demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'applications-1',module:'applications',title:'Applications demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
];
export function seedFor(module:string){return domainSeed.filter(x=>x.module===module)}
