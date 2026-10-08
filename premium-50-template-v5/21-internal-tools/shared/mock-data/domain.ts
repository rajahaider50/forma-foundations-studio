import type {DomainEntity} from "../domain";
export const domainSeed:DomainEntity[]=[
  {id:'users-1',module:'users',title:'Users demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'roles-1',module:'roles',title:'Roles demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'workflows-1',module:'workflows',title:'Workflows demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
];
export function seedFor(module:string){return domainSeed.filter(x=>x.module===module)}
