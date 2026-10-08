import type {DomainEntity} from "../domain";
export const domainSeed:DomainEntity[]=[
  {id:'vehicles-1',module:'vehicles',title:'Vehicles demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'drivers-1',module:'drivers',title:'Drivers demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'maintenance-1',module:'maintenance',title:'Maintenance demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
];
export function seedFor(module:string){return domainSeed.filter(x=>x.module===module)}
