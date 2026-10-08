import type {DomainRecord,Role} from "../types";
export const localCredentials={user:{email:"userlocal.test",password:"LocalUser123!",role:"user" as Role},admin:{email:"adminlocal.test",password:"LocalAdmin123!",role:"admin" as Role}};
export const seedRecords:DomainRecord[]=Array.from({length:12},(_,i)=>({id:`seed-${i+1}`,title:`SaaS Dashboard item ${i+1}`,status:i%4===0?"draft":i%4===1?"paused":"active",ownerId:"local-user",metadata:{module:["workspaces", "projects", "tasks", "analytics"][i%4]},createdAt:new Date(Date.now()-i*86400000).toISOString(),updatedAt:new Date().toISOString()}));

