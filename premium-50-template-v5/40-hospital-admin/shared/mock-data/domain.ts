import type {DomainEntity} from "../domain";
export const domainSeed:DomainEntity[]=[
  {id:'patients-1',module:'patients',title:'Patients demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'appointments-1',module:'appointments',title:'Appointments demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'records-1',module:'records',title:'Records demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
];
export function seedFor(module:string){return domainSeed.filter(x=>x.module===module)}
