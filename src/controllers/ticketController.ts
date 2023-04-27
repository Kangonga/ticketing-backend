import express, { Request, Response } from 'express'

export const getAllTickets = (req: Request, res:Response)=>{
    res.send('all Tickets')
}

export const getOneTicket = (req: Request, res:Response)=>{
    res.send('one Tickets')
}

export const createTicket = (req: Request, res:Response)=>{
    res.send('created Ticket')
}

export const updateOneTicket = (req: Request, res:Response)=>{
    res.send('update Ticket')
}

export const deleteTicket = (req: Request, res:Response)=>{
    res.send('delete Ticket')
}
