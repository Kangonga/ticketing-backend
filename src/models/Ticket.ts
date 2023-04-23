import mongoose, { Schema, model, Document } from  'mongoose'

//define interface for user object
interface Ticket {
    title: String;
    description: String;
    agent: String;
    developer: String;
    source: String;
    priority: String;
    isClosed: Boolean;
    createdAt: String;
    closedAt: String;
}

//create mongoose schema for user object
const ticketSchema = new Schema<Ticket>({
    title:{ type:String, required:true },
    description: { type: String, required: true },
    agent: { type: String, required: true },
    developer: { type: String, required: true },
    source: { type: String, required: true },
    priority: { type: String, required: true },
    isClosed: { type: Boolean, required: true },
    createdAt: { type: String, required: true },
    closedAt: { type: String, required: true },
})

//create mongoose model object
const TicketModel = model<Ticket>('Ticket', ticketSchema)

//export model
export default TicketModel