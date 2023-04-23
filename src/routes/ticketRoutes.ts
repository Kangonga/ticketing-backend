import express, { Express, Request, Response, Router } from 'express'
import { createTicket, deleteTicket, getAllTickets, getOneTicket, updateOneTicket } from '../controllers/ticketController.js';

const ticketsRoutes = Router();

ticketsRoutes.route('/')
.get(getAllTickets)
.post(createTicket)

ticketsRoutes.route('/:id')
.get(getOneTicket)
.patch(updateOneTicket)
.delete(deleteTicket)

export default ticketsRoutes