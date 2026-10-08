export type Role = "user" | "manager" | "admin" | "owner";
export type Status = "draft" | "active" | "paused" | "archived";
export interface Session { userId:string; email:string; role:Role; accessToken:string; expiresAt:number }
export interface DomainRecord { id:string; title:string; status:Status; ownerId:string; metadata:Record<string,unknown>; createdAt:string; updatedAt:string }
export interface ListQuery { q?:string; page?:number; pageSize?:number; sort?:string; direction?:"asc"|"desc"; status?:Status }
export interface Paginated<T> { data:T[]; page:number; pageSize:number; total:number; hasNext:boolean }
export const template = { id:"travel-planner", name:'Travel Planner', role:'user', modules:["trips", "itinerary", "places"] } as const;

