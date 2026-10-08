import type {DomainEntity} from "../domain";
export const domainSeed:DomainEntity[]=[
  {id:'surveys-1',module:'surveys',title:'Surveys demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'questions-1',module:'questions',title:'Questions demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'responses-1',module:'responses',title:'Responses demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
];
export function seedFor(module:string){return domainSeed.filter(x=>x.module===module)}
