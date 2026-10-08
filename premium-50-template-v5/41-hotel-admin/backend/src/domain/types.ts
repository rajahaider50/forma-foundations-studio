export type ModuleKey="rooms" | "reservations" | "guests";
export interface EntityRecord{id:string;module:ModuleKey;title:string;status:string;ownerId:string;metadata:Record<string,unknown>;createdAt:Date;updatedAt:Date}
