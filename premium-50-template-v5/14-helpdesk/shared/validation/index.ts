import { z } from "zod";
export const loginSchema=z.object({email:z.string().email(),password:z.string().min(8).max(128)});
export const signupSchema=loginSchema.extend({name:z.string().min(2).max(80),confirmPassword:z.string().min(8)}).refine(v=>v.password===v.confirmPassword,{path:["confirmPassword"],message:"Passwords do not match"});
export const recordSchema=z.object({title:z.string().min(2).max(160),status:z.enum(["draft","active","paused","archived"]).default("active"),metadata:z.record(z.unknown()).default({})});
export type RecordInput=z.infer<typeof recordSchema>;

