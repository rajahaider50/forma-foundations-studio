export type WorkflowEvent={type:'created'|'updated'|'deleted'|'paid'|'notified';module?:string;id?:string;at:string;metadata?:Record<string,unknown>};
export interface WorkflowAdapter{emit(event:WorkflowEvent):Promise<void>}
export class LocalWorkflow implements WorkflowAdapter{readonly events:WorkflowEvent[]=[];private key="premium-template:workflow:v5";constructor(){try{const raw=typeof localStorage!=="undefined"?localStorage.getItem(this.key):null;if(raw)this.events.push(...JSON.parse(raw))}catch{}}async emit(event:WorkflowEvent){this.events.push(event);try{if(typeof localStorage!=="undefined")localStorage.setItem(this.key,JSON.stringify(this.events.slice(-100)))}catch{}}}
export class InMemoryWorkflow extends LocalWorkflow {}
