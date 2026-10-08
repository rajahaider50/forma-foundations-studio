import type {DomainEntity} from "../domain";
export const domainSeed:DomainEntity[]=[
  {id:'listings-1',module:'listings',title:'Listings demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'viewings-1',module:'viewings',title:'Viewings demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'favorites-1',module:'favorites',title:'Favorites demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
];
export function seedFor(module:string){return domainSeed.filter(x=>x.module===module)}
