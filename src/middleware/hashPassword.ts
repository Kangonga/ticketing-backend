import bcrypt from 'bcrypt'
import { userInterface } from '../models/baseUserInterface.js';

export async function hashPassword(this:userInterface,next:any){
    const user = this;
    if (!user.isModified('password')){
        return (next())
    }
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(user.password, salt)
    user.password = hashedPassword
    next()
}