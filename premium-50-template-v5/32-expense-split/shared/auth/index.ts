import {MockAuthProvider} from "../mock-services";
import type {Role,Session} from "../types";
export const authProvider=new MockAuthProvider();
export function can(role:Role,permission:string){const map:Record<Role,string[]>={user:["read"],manager:["read","write"],admin:["read","write","delete","manage-users"],owner:["read","write","delete","manage-users","billing"]};return map[role].includes(permission)}
export function requireRole(session:Session|undefined,roles:Role[]){if(!session||!roles.includes(session.role))throw new Error("FORBIDDEN");return session;}

