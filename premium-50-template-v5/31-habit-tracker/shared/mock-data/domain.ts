import type {DomainEntity} from "../domain";
export const domainSeed:DomainEntity[]=[
  {id:'habits-1',module:'habits',title:'Habits demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'checkins-1',module:'checkins',title:'Checkins demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'streaks-1',module:'streaks',title:'Streaks demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
];
export function seedFor(module:string){return domainSeed.filter(x=>x.module===module)}
