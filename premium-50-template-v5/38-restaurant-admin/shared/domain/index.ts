export const templateDefinition={id:'38-restaurant-admin',name:'Restaurant Admin',modules:["orders", "menu", "kitchen", "staff"]} as const;
export type ModuleKey=typeof templateDefinition.modules[number];
export interface DomainEntity{id:string;module:ModuleKey;title:string;status:'draft'|'active'|'paused'|'archived';ownerId:string;metadata:Record<string,unknown>;createdAt:string;updatedAt:string}
export const moduleConfig=templateDefinition.modules.map(key=>({key,label:key.replace(/[-_]/g,' '),permissions:['read','write','delete'] as const,supportsCreate:true,supportsEdit:true,supportsDelete:true}));
