import type {DomainRecord,Role} from "../types";
export const localCredentials={user:{email:"user@music-library.local",password:"LocalUser123!",role:"user" as Role},admin:{email:"admin@music-library.local",password:"LocalAdmin123!",role:"admin" as Role}};
export const seedRecords:DomainRecord[]=Array.from({length:12},(_,i)=>({id:`seed-${i+1}`,title:`Music Library item ${i+1}`,status:i%4===0?"draft":i%4===1?"paused":"active",ownerId:"local-user",metadata:{module:["artists", "albums", "tracks", "playlists"][i%4]},createdAt:new Date(Date.now()-i*86400000).toISOString(),updatedAt:new Date().toISOString()}));

