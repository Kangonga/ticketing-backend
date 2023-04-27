import express, { Request, Response } from 'express'

export const getAllDevelopers = (req: Request, res:Response)=>{
    res.send('all Developers')
}

export const getOneDeveloper = (req: Request, res:Response)=>{
    res.send('one Developers')
}

export const createDeveloper = (req: Request, res:Response)=>{
    res.send('created Developer')
}

export const updateOneDeveloper = (req: Request, res:Response)=>{
    res.send('update Developer')
}

export const deleteDeveloper = (req: Request, res:Response)=>{
    res.send('delete Developer')
}
