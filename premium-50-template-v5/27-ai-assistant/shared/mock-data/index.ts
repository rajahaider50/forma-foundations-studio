import type {DomainRecord,Role} from "../types";
export const localCredentials={user:{email:"user@ai-assistant.local",password:"LocalUser123!",role:"user" as Role},admin:{email:"admin@ai-assistant.local",password:"LocalAdmin123!",role:"admin" as Role}};
export const seedRecords:DomainRecord[]=Array.from({length:12},(_,i)=>({id:`seed-${i+1}`,title:`AI Assistant item ${i+1}`,status:i%4===0?"draft":i%4===1?"paused":"active",ownerId:"local-user",metadata:{module:["threads", "prompts", "usage"][i%3]},createdAt:new Date(Date.now()-i*86400000).toISOString(),updatedAt:new Date().toISOString()}));

