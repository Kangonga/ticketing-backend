import mongoose, { Schema, model, Types } from  'mongoose'
import { hashPassword } from '../middleware/hashPassword.js';

//define interface for user object
interface Developer {
    firstName: string;
    lastName: string;
    email: string;
    ticketsClosed:number;
    imgUrl: string;
    isOnline:boolean;
    password: string;
    role:string,
    admin: {
        type: Types.ObjectId,
        ref:string
    };
}

//create mongoose schema for user object
const developerSchema = new Schema<Developer>({
    firstName:{ type:String, required:true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    ticketsClosed: { type: Number, required: true },
    imgUrl: { type: String, required: true },
    isOnline: { type: Boolean, required: true},
    password: { type: String, required: true },
    role:{ type: String, required: true },
    admin: { type: Types.ObjectId, ref: "Admin" }
})

developerSchema.pre('save', hashPassword)
//create mongoose model object
const DeveloperModel = model('Developer', developerSchema)

//export model
export default DeveloperModel