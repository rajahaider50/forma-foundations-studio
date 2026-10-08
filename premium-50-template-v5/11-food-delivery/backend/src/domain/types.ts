export type ModuleKey="restaurants" | "menu" | "cart" | "orders";
export interface EntityRecord{id:string;module:ModuleKey;title:string;status:string;ownerId:string;metadata:Record<string,unknown>;createdAt:Date;updatedAt:Date}
