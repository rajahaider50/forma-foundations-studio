export const templateDefinition={id:'46-form-builder',name:'Form Builder',modules:["forms", "fields", "submissions"]} as const;
export type ModuleKey=typeof templateDefinition.modules[number];
export interface DomainEntity{id:string;module:ModuleKey;title:string;status:'draft'|'active'|'paused'|'archived';ownerId:string;metadata:Record<string,unknown>;createdAt:string;updatedAt:string}
export const moduleConfig=templateDefinition.modules.map(key=>({key,label:key.replace(/[-_]/g,' '),permissions:['read','write','delete'] as const,supportsCreate:true,supportsEdit:true,supportsDelete:true}));
