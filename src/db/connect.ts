import mongoose from "mongoose";
import dotenv from 'dotenv'
import session from "express-session";
import { default as connectMongoDBSession }  from "connect-mongodb-session"

const MongoDBStore = connectMongoDBSession(session);

dotenv.config()

export const connectDb = (url:any)=>{
    return mongoose.connect(url)
}

export const sessionStore = new MongoDBStore({
    collection:'mySessions',
    uri:process.env.MONGODB_URI as string,
})

