import { Request, Response } from 'express';

import AdminModel from '../models/Admin.js';
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
      const admin = await AdminModel.findById(req.body.admin)
      if(!admin){
        return res.status(400).json({ message: 'Could not create agent.'})
      }
      const doesAgentExist = await DeveloperModel.findOne({ email: req.body.email })
      if (doesAgentExist){
        return res.status(400).json({ message: 'Email already registered'})
      }
      const developer = await DeveloperModel.create(req.body)
      admin.developers.push(developer._id)
      await admin.save()
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
    const admin = await AdminModel.findById(req.body.admin)
    if(!admin){
      return res.status(400).json({ message: 'Could not delete agent.'})
    }
    const developerId = req.params.id
    try {
      const developer = await DeveloperModel.findOneAndDelete({
        _id: developerId
      })
      if (!developer) {
        return res.status(404).json({ message: 'Developer not found' });
      }
      admin.developers = admin.developers.filter(id=>id.toString()!==developerId)
      await admin.save()
      res.json({ message: 'Developer deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }
};
