import type {DomainEntity} from "../domain";
export const domainSeed:DomainEntity[]=[
  {id:'dashboards-1',module:'dashboards',title:'Dashboards demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'metrics-1',module:'metrics',title:'Metrics demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'reports-1',module:'reports',title:'Reports demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
];
export function seedFor(module:string){return domainSeed.filter(x=>x.module===module)}
