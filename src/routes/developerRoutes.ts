import express, { Express, Request, Response, Router } from 'express'
import { DeveloperController } from '../controllers/developerController.js';

const developerRoutes = Router();

developerRoutes.route('/')
.get(DeveloperController.getAllDevelopers)
.post(DeveloperController.createDeveloper)

developerRoutes.route('/:id')
.get(DeveloperController.getDeveloperById)
.patch(DeveloperController.updateDeveloperById)
.delete(DeveloperController.deleteDeveloperById)

export default developerRoutes