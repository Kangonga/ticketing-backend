import { Request, Response } from 'express';

// import Developer model
import  Developer  from '../models/Developer.js';

export const DeveloperController = {
  async getAllDevelopers(req: Request, res: Response) {
    try {
      const developers = await Developer.find();
      res.json(developers);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  },
  
  async createDeveloper(req: Request, res: Response) {
    const developer = new Developer({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      // additional fields for Developer model
    });

    try {
      const newDeveloper = await developer.save();
      res.status(201).json(newDeveloper);
    } catch (err) {
      res.status(400).json({ message: err });
    }
  },

  async getDeveloperById(req: Request, res: Response) {
    try {
      const developer = await Developer.findById(req.params.id);
      if (!developer) {
        return res.status(404).json({ message: 'Developer not found' });
      }
      res.json(Developer);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  },

  async updateDeveloperById(req: Request, res: Response) {
    try {
      const developer = await Developer.findById(req.params.id);
      if (!developer) {
        return res.status(404).json({ message: 'Developer not found' });
      }

      // additional fields for Developer model

      const updatedDeveloper = await developer.save();
      res.json(updatedDeveloper);
    } catch (err) {
      res.status(400).json({ message: err });
    }
  },

  async deleteDeveloperById(req: Request, res: Response) {
    try {
      const developer = await Developer.findById(req.params.id);
      if (!developer) {
        return res.status(404).json({ message: 'Developer not found' });
      }
      res.json({ message: 'Developer deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }
};
