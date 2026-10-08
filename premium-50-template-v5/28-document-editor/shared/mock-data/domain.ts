import type {DomainEntity} from "../domain";
export const domainSeed:DomainEntity[]=[
  {id:'documents-1',module:'documents',title:'Documents demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'versions-1',module:'versions',title:'Versions demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'comments-1',module:'comments',title:'Comments demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
];
export function seedFor(module:string){return domainSeed.filter(x=>x.module===module)}
