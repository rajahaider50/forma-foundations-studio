import type {DomainEntity} from "../domain";
export const domainSeed:DomainEntity[]=[
  {id:'forms-1',module:'forms',title:'Forms demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'fields-1',module:'fields',title:'Fields demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'submissions-1',module:'submissions',title:'Submissions demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
];
export function seedFor(module:string){return domainSeed.filter(x=>x.module===module)}
