import mongoose, { Schema, model, Document, Types } from  'mongoose'
import { hashPassword } from '../middleware/hashPassword.js';

//define interface for user object
interface Agent {
    firstName: String;
    lastName: String;
    email: String;
    ticketsOpened:Number;
    imgUrl: String;
    isOnline:Boolean;
    password: String;
    admin: {
        type: Types.ObjectId,
        ref:String
    };
}

//cre mongoose schema for user object
const agentSchema = new Schema<Agent>({
    firstName:{ type:String, required:true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    ticketsOpened: { type: Number, required: true },
    imgUrl: { type: String, required: true },
    isOnline: { type: Boolean, required: true},
    password: { type: String, required: true },
    admin: { type: Types.ObjectId, ref: "Admin" }
})
agentSchema.pre('save', hashPassword)

//create mongoose model object
const AgentModel = model('Agent', agentSchema)

//export model
export default AgentModel