import mongoose from "mongoose";

export const connectDb = (url:any)=>{
    return mongoose.connect(url)
}