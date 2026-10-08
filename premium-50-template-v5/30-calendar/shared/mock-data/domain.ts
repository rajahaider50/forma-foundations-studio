import type {DomainEntity} from "../domain";
export const domainSeed:DomainEntity[]=[
  {id:'events-1',module:'events',title:'Events demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'attendees-1',module:'attendees',title:'Attendees demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'reminders-1',module:'reminders',title:'Reminders demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
];
export function seedFor(module:string){return domainSeed.filter(x=>x.module===module)}
