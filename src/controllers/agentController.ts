import { Request, Response } from 'express';

// import agent model
import  Agent  from '../models/Agent.js';

export const agentController = {
  async getAllAgents(req: Request, res: Response) {
    try {
      const agents = await Agent.find();
      res.json(agents);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  },
  
  async createAgent(req: Request, res: Response) {
    const agent = new Agent({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      // additional fields for agent model
    });

    try {
      const newAgent = await agent.save();
      res.status(201).json(newAgent);
    } catch (err) {
      res.status(400).json({ message: err });
    }
  },

  async getAgentById(req: Request, res: Response) {
    try {
      const agent = await Agent.findById(req.params.id);
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
      const agent = await Agent.findById(req.params.id);
      if (!agent) {
        return res.status(404).json({ message: 'Agent not found' });
      }

      // additional fields for agent model

      const updatedAgent = await agent.save();
      res.json(updatedAgent);
    } catch (err) {
      res.status(400).json({ message: err });
    }
  },

  async deleteAgentById(req: Request, res: Response) {
    try {
      const agent = await Agent.findById(req.params.id);
      if (!agent) {
        return res.status(404).json({ message: 'Agent not found' });
      }
    //   await agent.remove();
      res.json({ message: 'Agent deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }
};
