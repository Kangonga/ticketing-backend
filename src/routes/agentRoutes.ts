import express, { Express, Request, Response, Router } from 'express'
import { createAgent, deleteAgent, getAllAgents, getOneAgent, updateOneAgent } from '../controllers/agentController.js';

const agentRoutes = Router();

agentRoutes.route('/')
.get(getAllAgents)
.post(createAgent)

agentRoutes.route('/:id')
.get(getOneAgent)
.patch(updateOneAgent)
.delete(deleteAgent)

export default agentRoutes