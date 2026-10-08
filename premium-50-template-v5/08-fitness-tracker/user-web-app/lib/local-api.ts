import {LocalRepository} from "../../shared/repository";import type {DomainEntity} from "../../shared/domain";
const repo=new LocalRepository();
export async function listLocal(module:string,q=""){return repo.list(module,q)}
export async function createLocal(input:Omit<DomainEntity,"id"|"createdAt"|"updatedAt">){return repo.create(input)}
export async function updateLocal(id:string,patch:Partial<DomainEntity>){return repo.update(id,patch)}
export async function removeLocal(id:string){return repo.remove(id)}
