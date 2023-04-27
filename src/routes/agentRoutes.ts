import express, { Express, Request, Response, Router } from 'express'
// import { createAgent, deleteAgent, getAllAgents, getOneAgent, updateOneAgent } from '../controllers/agentController.js';
import { agentController } from '../controllers/agentController.js'; 

const agentRoutes = Router();

agentRoutes.route('/')
.get(agentController.getAllAgents)
.post(agentController.createAgent)

agentRoutes.route('/:id')
.get(agentController.getAgentById)
.patch(agentController.updateAgentById)
.delete(agentController.deleteAgentById)

export default agentRoutes