export type ModuleKey="tickets" | "agents" | "knowledgebase";
export interface EntityRecord{id:string;module:ModuleKey;title:string;status:string;ownerId:string;metadata:Record<string,unknown>;createdAt:Date;updatedAt:Date}
