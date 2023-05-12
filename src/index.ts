import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import agentRoutes from './routes/agentRoutes.js'
import adminRoutes from './routes/adminRoutes.js'
import ticketsRoutes from './routes/ticketRoutes.js'
import developerRoutes from './routes/developerRoutes.js'
import authRoutes from './routes/authRoutes.js'
import cors from 'cors'
import { connectDb, sessionStore } from './db/connect.js'
import session from 'express-session'

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
app.use(
    session({
        secret:process.env.SESSION_SECRET as string,
        resave: false,
        saveUninitialized:false,
        store:sessionStore
    })
)
app.use('/agents', agentRoutes)
app.use('/admin', adminRoutes)
app.use('/tickets', ticketsRoutes)
app.use('/developers', developerRoutes)
app.use('/auth', authRoutes)

const startApp = async()=>{
    try{
        await connectDb(process.env.MONGODB_URI)
        app.listen(port, ()=>console.log(`server listening on port ${port}`))
    }catch(error){
        console.log('error creating database', error)
    }
}
startApp()