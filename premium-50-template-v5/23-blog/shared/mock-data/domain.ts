import type {DomainEntity} from "../domain";
export const domainSeed:DomainEntity[]=[
  {id:'posts-1',module:'posts',title:'Posts demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'authors-1',module:'authors',title:'Authors demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'bookmarks-1',module:'bookmarks',title:'Bookmarks demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
];
export function seedFor(module:string){return domainSeed.filter(x=>x.module===module)}
