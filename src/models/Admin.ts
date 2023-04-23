import mongoose, { Schema, model, Document } from  'mongoose'

//define interface for user object
interface Admin {
    firstName: String;
    lastName: String;
    email: String;
    password: String
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
})

//create mongoose model object
const AdminModel = model('Admin', adminSchema)

//export model
export default AdminModel