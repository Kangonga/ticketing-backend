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
        const ticket = new TicketModel({
            title: req.body.title,
            description: req.body.description,
            agent: req.body.agent,
            developer: req.body.developer,
            admin: req.body.admin,
            source: req.body.source, 
            priority: req.body.priority, 
            isClosed: req.body.isClosed,
            createdAt: req.body.createdAt, 
            closedAt: req.body.closedAt,
        })
        try{
            const newTicket = await ticket.save();
            res.status(201).json(newTicket);
        }catch (err) {
            res.status(400).json({ message:err })
        }
    },
    
    async updateTicketById (req: Request, res:Response){
        try{
            const ticket = await TicketModel.findById(req.params.id);
            if (!ticket) {
                return res.status(404).json({ message: 'Ticket not found' })
            }
            const updatedTicket = await ticket.save();
            res.json(updatedTicket)
        }catch (err) {
            res.status(400).json({ message: err })
        }
    },
    
    async deleteTicketById (req: Request, res:Response){
        try{
            const ticket = await TicketModel.findById(req.params.id)
            if(!ticket){
                return res.status(404).json({ message: 'No tickets found'})
            }
            res.json({ message:'Agent deleted successfuly'})
        }catch ( err ){
            res.status(500).json({ message: err })
        }
    }
}
