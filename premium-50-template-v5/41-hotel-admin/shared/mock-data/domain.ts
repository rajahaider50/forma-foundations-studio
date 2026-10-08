import type {DomainEntity} from "../domain";
export const domainSeed:DomainEntity[]=[
  {id:'rooms-1',module:'rooms',title:'Rooms demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'reservations-1',module:'reservations',title:'Reservations demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'guests-1',module:'guests',title:'Guests demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
];
export function seedFor(module:string){return domainSeed.filter(x=>x.module===module)}
