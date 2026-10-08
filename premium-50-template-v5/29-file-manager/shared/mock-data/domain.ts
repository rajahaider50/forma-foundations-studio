import type {DomainEntity} from "../domain";
export const domainSeed:DomainEntity[]=[
  {id:'files-1',module:'files',title:'Files demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'folders-1',module:'folders',title:'Folders demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'sharing-1',module:'sharing',title:'Sharing demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
];
export function seedFor(module:string){return domainSeed.filter(x=>x.module===module)}
