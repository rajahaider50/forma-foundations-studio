import jwt from "jsonwebtoken";
export function signSession(userId:string,role:string){return jwt.sign({sub:userId,role},process.env.JWT_SECRET||"development-only-secret",{expiresIn:"7d"});}
export function requireRole(role:string){return (req:any,res:any,next:any)=>{if(req.user?.role!==role)return res.status(403).json({message:"Forbidden"});next();};}