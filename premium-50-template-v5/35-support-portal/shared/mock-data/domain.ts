import type {DomainEntity} from "../domain";
export const domainSeed:DomainEntity[]=[
  {id:'faq-1',module:'faq',title:'Faq demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'tickets-1',module:'tickets',title:'Tickets demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  {id:'feedback-1',module:'feedback',title:'Feedback demo record',status:'active',ownerId:'local-user',metadata:{},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
];
export function seedFor(module:string){return domainSeed.filter(x=>x.module===module)}
