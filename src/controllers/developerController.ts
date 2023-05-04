import { Request, Response } from 'express';

// import Developer model
import  DeveloperModel  from '../models/Developer.js';

export const DeveloperController = {
  async getAllDevelopers(req: Request, res: Response) {
    try {
      const developers = await DeveloperModel.find();
      res.json(developers);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  },
  
  async createDeveloper(req: Request, res: Response) {
    try {
      const developer = await DeveloperModel.create(req.body)
      res.status(201).json(developer);
    } catch (err) {
      res.status(400).json({ message: err });
    }
  },

  async getDeveloperById(req: Request, res: Response) {
    try {
      const developer = await DeveloperModel.findById(req.params.id)
      if (!developer) {
        return res.status(404).json({ message: 'Developer not found' });
      }
      res.json(developer);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  },

  async updateDeveloperById(req: Request, res: Response) {
    const developerId =req.params.id
    try {
      const developer = await DeveloperModel.findOneAndUpdate({
        _id: developerId
      },
      req.body,
      {
        new:true,
        runValidators:true
      }
      );
      if (!developer) {
        return res.status(404).json({ message: 'Developer not found' });
      }
      res.json(developer);
    } catch (err) {
      res.status(400).json({ message: err });
    }
  },

  async deleteDeveloperById(req: Request, res: Response) {
    const developerId = req.params.id
    try {
      const developer = await DeveloperModel.findOneAndDelete({
        _id: developerId
      })
      if (!developer) {
        return res.status(404).json({ message: 'Developer not found' });
      }
      res.json({ message: 'Developer deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }
};
