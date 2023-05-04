import express, { Express, Request, Response, Router } from 'express'
// import { createAgent, deleteAgent, getAllAgents, getOneAgent, updateOneAgent } from '../controllers/AgentController.js';
import { AgentController } from '../controllers/agentController.js'; 

const agentRoutes = Router();

agentRoutes.route('/')
.get(AgentController.getAllAgents)
.post(AgentController.createAgent)

agentRoutes.route('/:id')
.get(AgentController.getAgentById)
.patch(AgentController.updateAgentById)
.delete(AgentController.deleteAgentById)

export default agentRoutes