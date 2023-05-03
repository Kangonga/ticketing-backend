import express, { Express, Request, Response, Router } from 'express'
import { ticketController } from '../controllers/ticketController.js';
const ticketsRoutes = Router();

ticketsRoutes.route('/')
.get(ticketController.getAllTickets)
.post(ticketController.createTicket)

ticketsRoutes.route('/:id')
.get(ticketController.getTicketById)
.patch(ticketController.updateTicketById)
.delete(ticketController.deleteTicketById)

export default ticketsRoutes