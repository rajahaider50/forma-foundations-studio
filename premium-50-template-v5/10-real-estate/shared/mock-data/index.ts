import type {DomainRecord,Role} from "../types";
export const localCredentials={user:{email:"user@real-estate.local",password:"LocalUser123!",role:"user" as Role},admin:{email:"admin@real-estate.local",password:"LocalAdmin123!",role:"admin" as Role}};
export const seedRecords:DomainRecord[]=Array.from({length:12},(_,i)=>({id:`seed-${i+1}`,title:`Real Estate item ${i+1}`,status:i%4===0?"draft":i%4===1?"paused":"active",ownerId:"local-user",metadata:{module:["listings", "viewings", "favorites"][i%3]},createdAt:new Date(Date.now()-i*86400000).toISOString(),updatedAt:new Date().toISOString()}));

