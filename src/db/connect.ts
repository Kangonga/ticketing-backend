import mongoose from "mongoose";
import MongoStore from "connect-mongo";
import dotenv from 'dotenv'


dotenv.config()

export const connectDb = (url:any)=>{
    return mongoose.connect(url)
}

const sessionStore = MongoStore.create({
    mongoUrl:process.env.MONGODB_URI,
    ttl:20000
})

export const sessionOptions = {
    secret: process.env.SESSION_SECRET as string,
    cookie: { maxAge:20000, httpOnly: true, signed: true},
    resave: false,
    store: sessionStore
}