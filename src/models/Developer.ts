import mongoose, { Schema, model, Types } from  'mongoose'

//define interface for user object
interface Developer {
    firstName: String;
    lastName: String;
    email: String;
    ticketsClosed:Number;
    imgUrl: String;
    isOnline:Boolean;
    password: String;
    admin: {
        type: Types.ObjectId,
        ref:String
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
    admin: { type: Types.ObjectId, ref: "Admin" }
})

//create mongoose model object
const DeveloperModel = model('Developer', developerSchema)

//export model
export default DeveloperModel