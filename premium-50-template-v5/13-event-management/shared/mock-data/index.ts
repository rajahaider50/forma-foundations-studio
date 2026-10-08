import type {DomainRecord,Role} from "../types";
export const localCredentials={user:{email:"user@event-management.local",password:"LocalUser123!",role:"user" as Role},admin:{email:"admin@event-management.local",password:"LocalAdmin123!",role:"admin" as Role}};
export const seedRecords:DomainRecord[]=Array.from({length:12},(_,i)=>({id:`seed-${i+1}`,title:`Event Management item ${i+1}`,status:i%4===0?"draft":i%4===1?"paused":"active",ownerId:"local-user",metadata:{module:["events", "tickets", "attendees"][i%3]},createdAt:new Date(Date.now()-i*86400000).toISOString(),updatedAt:new Date().toISOString()}));

