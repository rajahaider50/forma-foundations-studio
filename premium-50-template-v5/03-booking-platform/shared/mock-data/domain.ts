import type {DomainEntity} from "../domain";
export const domainSeed:DomainEntity[]=[
  {id:'services-1',module:'services',title:'Services demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'availability-1',module:'availability',title:'Availability demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'bookings-1',module:'bookings',title:'Bookings demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
];
export function seedFor(module:string){return domainSeed.filter(x=>x.module===module)}
