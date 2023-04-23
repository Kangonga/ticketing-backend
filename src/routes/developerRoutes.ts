import express, { Express, Request, Response, Router } from 'express'
import { createDeveloper, deleteDeveloper, getAllDevelopers, getOneDeveloper, updateOneDeveloper } from '../controllers/developerController.js';

const developerRoutes = Router();

developerRoutes.route('/')
.get(getAllDevelopers)
.post(createDeveloper)

developerRoutes.route('/:id')
.get(getOneDeveloper)
.patch(updateOneDeveloper)
.delete(deleteDeveloper)

export default developerRoutes