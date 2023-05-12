import { Request, Response } from "express"


export const signIn = (req:Request, res:Response)=>{
    console.log(req.sessionID)
    res.send(req.session)
}
export const signOut = ()=>{
    
}
export const signUp = ()=>{

}
