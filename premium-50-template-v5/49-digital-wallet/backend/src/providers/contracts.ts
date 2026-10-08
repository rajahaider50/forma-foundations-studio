export interface OtpProvider{send(target:string):Promise<{requestId:string;testCode?:string}>;verify(requestId:string,code:string):Promise<boolean>}
export interface EmailProvider{send(input:{to:string;subject:string;html:string}):Promise<{id:string}>}
export interface PaymentProvider{createCheckout(input:{amount:number;currency:string;reference:string}):Promise<{id:string;status:'success'|'failed'|'pending'}>}
export interface StorageProvider{put(input:{key:string;contentType:string;bytes:Uint8Array}):Promise<{url:string;key:string}>}
export interface MapsProvider{geocode(query:string):Promise<{lat:number;lng:number;label:string}[]>}
export interface AiProvider{complete(input:{system?:string;prompt:string}):Promise<{text:string;usage?:{input:number;output:number}}>};
