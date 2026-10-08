import type {DomainRecord,Role} from "../types";
export const localCredentials={user:{email:"user@restaurant-admin.local",password:"LocalUser123!",role:"user" as Role},admin:{email:"admin@restaurant-admin.local",password:"LocalAdmin123!",role:"admin" as Role}};
export const seedRecords:DomainRecord[]=Array.from({length:12},(_,i)=>({id:`seed-${i+1}`,title:`Restaurant Admin item ${i+1}`,status:i%4===0?"draft":i%4===1?"paused":"active",ownerId:"local-user",metadata:{module:["orders", "menu", "kitchen", "staff"][i%4]},createdAt:new Date(Date.now()-i*86400000).toISOString(),updatedAt:new Date().toISOString()}));

