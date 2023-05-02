import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import agentRoutes from './routes/agentRoutes.js'
import adminRoutes from './routes/adminRoutes.js'
import ticketsRoutes from './routes/ticketRoutes.js'
import developerRoutes from './routes/developerRoutes.js'
import authRoutes from './routes/authRoutes.js'
import cookieSession from 'cookie-session'
import cors from 'cors'
import mongoose from 'mongoose'
import { connectDb } from './db/connect.js'

dotenv.config()
const mongoURI = process.env.MONGODB_URI
const app: Express = express()
const port = process.env.PORT || 3000

const corsOptions = {
    origin:'http://localhost:3000'
}

app.use(express.json())
app.use(express.urlencoded({extended:true}))
//enables cors
app.use((cors(corsOptions)))
app.use('/agents', agentRoutes)
app.use('/admin', adminRoutes)
app.use('/tickets', ticketsRoutes)
app.use('/developers', developerRoutes)
app.use('/auth', authRoutes)
//helps to store  session data on the client within a cookie
// without requiring any database/resources on the server side.
app.use(
    cookieSession({
        name:'mysession',
        secret: process.env.COOKIE_SECRET,
        //the cookie will only be available via http requests, and cant be accessed by client side js
        httpOnly:true
    })
)
// app.get('/', (req:Request, res:Response) =>{
//     res.send('Express and typescript server')
// })
const startApp = async()=>{
    try{
        await connectDb(process.env.MONGODB_URI)
        app.listen(port, ()=>console.log(`server listening on port ${port}`))
    }catch(error){
        console.log('error creating database', error)
    }
}
startApp()