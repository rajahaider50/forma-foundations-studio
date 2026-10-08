import type {DomainEntity} from "../domain";
export const domainSeed:DomainEntity[]=[
  {id:'videos-1',module:'videos',title:'Videos demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'watchlist-1',module:'watchlist',title:'Watchlist demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'progress-1',module:'progress',title:'Progress demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
];
export function seedFor(module:string){return domainSeed.filter(x=>x.module===module)}
