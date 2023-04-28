import mongoose, { Schema, model, Document, Types } from  'mongoose'

//define interface for user object
interface Admin {
    firstName: String;
    lastName: String;
    email: String;
    password: String;
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
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    agents:[{ type: Types.ObjectId, ref:'Agent' }],
    developers:[{ type: Types.ObjectId, ref:'Developer' }],
    tickets:[{ type: Types.ObjectId, ref:'Ticket' }]
})

//create mongoose model object
const AdminModel = model('Admin', adminSchema)

//export model
export default AdminModel