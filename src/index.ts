import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import agentRoutes from './routes/agentRoutes.js'
import adminRoutes from './routes/adminRoutes.js'
import ticketsRoutes from './routes/ticketRoutes.js'
import developerRoutes from './routes/developerRoutes.js'
import authRoutes from './routes/authRoutes.js'
import cookieSession from 'cookie-session'
import cors from 'cors'
dotenv.config()

const app: Express = express()
const port = process.env.PORT

const corsOptions = {
    origin:'http://localhost:3000'
}

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use((cors(corsOptions)))
app.use('/agents', agentRoutes)
app.use('/admin', adminRoutes)
app.use('/tickets', ticketsRoutes)
app.use('/developers', developerRoutes)
app.use('/auth', authRoutes)

// app.get('/', (req:Request, res:Response) =>{
//     res.send('Express and typescript server')
// })

app.listen(port, ()=>console.log(`server listening on port ${port}`))