import express, { Request, Response } from 'express'

//import model
import TicketModel from '../models/Ticket.js'

export const ticketController = {
    async getAllTickets (req: Request, res:Response){
        try {
            const tickets = await TicketModel.find();
            res.status(200).json(tickets);
        }catch (err) {
            res.status(400).json({ message: err })
        }
    },
    
    async getTicketById (req: Request, res:Response){
        try{    
            const ticket = await TicketModel.findById(req.params.id)
            if(!ticket){
                return res.status(404).json({ message: 'Ticket not found'})
            }
        }catch (err) {
            res.status(500).json({ message: err })
        }
    },
    
    async createTicket (req: Request, res:Response){ 
        try{
            const ticket = await TicketModel.create(req.params.body);
            res.status(201).json(ticket);
        }catch (err) {
            res.status(400).json({ message:err })
        }
    },
    
    async updateTicketById (req: Request, res:Response){
        try{
            const ticketId = req.params.id
            const ticket = await TicketModel.findOneAndUpdate({
                _id: ticketId
            },
            req.body,
            {
                new:true,
                runValidators:true
            }
            )
            if (!ticket) {
                return res.status(404).json({ message: 'Ticket not found' })
            }
            res.json(ticket)
        }catch (err) {
            res.status(400).json({ message: err })
        }
    },
    
    async deleteTicketById (req: Request, res:Response){
        try{
            const ticketId = req.params.id
            const ticket = await TicketModel.findOneAndDelete({
                _id: ticketId
            }
            )
            if (!ticket) {
                return res.status(404).json({ message: 'Ticket not found' })
            }
            res.json({ message: 'Ticket deleted successfuly'})
        }catch (err) {
            res.status(500).json({ message: err })
        }
    }
}
