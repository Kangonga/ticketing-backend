import express, { Request, Response } from 'express'

export const getAllAdmins = (req: Request, res:Response)=>{
    res.send('all admins')
}

export const getOneAdmin = (req: Request, res:Response)=>{
    res.send('one admins')
}

export const createAdmin = (req: Request, res:Response)=>{
    res.send('created admin')
}

export const updateOneAdmin = (req: Request, res:Response)=>{
    res.send('update admin')
}

export const deleteAdmin = (req: Request, res:Response)=>{
    res.send('delete admin')
}
