import type {DomainEntity} from "../domain";
export const domainSeed:DomainEntity[]=[
  {id:'trips-1',module:'trips',title:'Trips demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'itinerary-1',module:'itinerary',title:'Itinerary demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'places-1',module:'places',title:'Places demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
];
export function seedFor(module:string){return domainSeed.filter(x=>x.module===module)}
