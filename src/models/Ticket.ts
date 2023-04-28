import mongoose, { Schema, model, Document, Types } from  'mongoose'

//define interface for user object
interface Ticket {
    title: String;
    description: String;
    source: String;
    priority: String;
    isClosed: Boolean;
    createdAt: String;
    closedAt: String;
    admin: {
        type: Types.ObjectId,
        ref:String
    };
    developer: {
        type: Types.ObjectId,
        ref:String
    };
    agent: {
        type: Types.ObjectId,
        ref:String
    };
}

//create mongoose schema for user object
const ticketSchema = new Schema<Ticket>({
    title:{ type:String, required:true },
    description: { type: String, required: true },
    agent: { type: Types.ObjectId, required: true },
    developer: { type: Types.ObjectId, required: true },
    admin: { type: Types.ObjectId, required: true },
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