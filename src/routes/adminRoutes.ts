import express, { Express, Request, Response, Router } from 'express'
import { AdminController } from '../controllers/adminController.js';


const adminRoutes = Router();

adminRoutes.route('/')
.get(AdminController.getAlladmins)
.post(AdminController.createadmin)

adminRoutes.route('/:id')
.get(AdminController.getadminById)
.patch(AdminController.updateadminById)
.delete(AdminController.deleteadminById)

export default adminRoutes