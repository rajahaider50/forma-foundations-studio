import type {DomainEntity} from "../domain";
export const domainSeed:DomainEntity[]=[
  {id:'shows-1',module:'shows',title:'Shows demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'episodes-1',module:'episodes',title:'Episodes demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'queue-1',module:'queue',title:'Queue demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
];
export function seedFor(module:string){return domainSeed.filter(x=>x.module===module)}
