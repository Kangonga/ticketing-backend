import express, { Express, Request, Response, Router } from 'express'
import { createAdmin, deleteAdmin, getAllAdmins, getOneAdmin, updateOneAdmin } from '../controllers/adminController.js';


const adminRoutes = Router();

adminRoutes.route('/')
.get(getAllAdmins)
.post(createAdmin)

adminRoutes.route('/:id')
.get(getOneAdmin)
.patch(updateOneAdmin)
.delete(deleteAdmin)

export default adminRoutes