import mongoose, { Schema, model, Document, Types } from  'mongoose'
import { hashPassword } from '../middleware/hashPassword.js';

interface Admin {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role:string,
    agents: Types.ObjectId[];
    tickets: Types.ObjectId[];
    developers: Types.ObjectId[];
}

//create mongoose schema for user object
const adminSchema = new Schema<Admin>({
    firstName:{
        type:String,
        required:true
    },
    role:{ type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    agents:[{ type: Types.ObjectId, ref:'Agent' }],
    developers:[{ type: Types.ObjectId, ref:'Developer' }],
    tickets:[{ type: Types.ObjectId, ref:'Ticket' }]
})
adminSchema.pre('save', hashPassword)
//create mongoose model object
const AdminModel = model('Admin', adminSchema)

//export model
export default AdminModel