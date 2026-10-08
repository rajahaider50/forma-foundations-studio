import type {EntityRecord,ModuleKey} from './types';
export interface EntityRepository{list(module:ModuleKey,q?:string):Promise<EntityRecord[]>;get(id:string):Promise<EntityRecord|null>;create(input:Omit<EntityRecord,'id'|'createdAt'|'updatedAt'>):Promise<EntityRecord>;update(id:string,patch:Partial<EntityRecord>):Promise<EntityRecord>;remove(id:string):Promise<void>}
