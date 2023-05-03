import { Request, Response } from 'express';

// import agent model
import  AgentController  from '../models/Agent.js';

export const agentController = {
  async getAllAgents(req: Request, res: Response) {
    try {
      const agents = await AgentController.find();
      res.json(agents);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  },
  
  async createAgent(req: Request, res: Response) {

    try {
      const agent = AgentController.create(req.body)
      res.status(201).json(agent);
    } catch (err) {
      res.status(400).json({ message: err });
    }
  },

  async getAgentById(req: Request, res: Response) {
    try {
      const agent = await AgentController.findById(req.params.id);
      if (!agent) {
        return res.status(404).json({ message: 'Agent not found' });
      }
      res.json(agent);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  },

  async updateAgentById(req: Request, res: Response) {
    try {
      const agentId = req.params.id
      const agent = await AgentController.findOneAndUpdate({
        _id:agentId
      },
      req.body,
      {
        new:true,
        runValidators:true
      }
      )
      if (!agent) {
        return res.status(404).json({ message: 'Agent not found' });
      }
      res.json(agent);
    } catch (err) {
      res.status(400).json({ message: err });
    }
  },

  async deleteAgentById(req: Request, res: Response) {
    try {
      const agentId = req.params.body
      const agent = await AgentController.findOneAndDelete({
        _id:agentId
      });
      if (!agent) {
        return res.status(404).json({ message: 'Agent not found' });
      }
      res.json({ message: 'Agent deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }
};
