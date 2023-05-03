import { Request, Response } from 'express';

// import admin model
import  Admin  from '../models/Admin.js';

export const AdminController = {
  async getAlladmins(req: Request, res: Response) {
    try {
      const admins = await Admin.find();
      res.json(admins);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  },
  
  async createadmin(req: Request, res: Response) {
    try {
      const admin = await Admin.create(req.body)
      console.log(req.body)
      res.status(201).json(admin);
    } catch (err) {
      res.status(400).json({ message: err });
    }
  },

  async getadminById(req: Request, res: Response) {
    try {
      const admin = await Admin.findById(req.params.id);
      if (!admin) {
        return res.status(404).json({ message: 'admin not found' });
      }
      res.json(admin);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  },

  async updateadminById(req: Request, res: Response) {
    try {
      const adminId = req.params.id
      const admin = await Admin.findOneAndUpdate({
        _id:adminId
      },
      req.body,
      {
        new:true,
        runValidators:true
      }
      );
      if (!admin) {
        return res.status(404).json({ message: 'admin not found' });
      }
      res.json(admin);
    } catch (err) {
      res.status(400).json({ message: err });
    }
  },

  async deleteadminById(req: Request, res: Response) {
    try {
      const adminId = req.params.id
      const admin = await Admin.findOneAndDelete({
        _id:adminId
      });
      if (!admin) {
        return res.status(404).json({ message: 'admin not found' });
      }
      res.json({ message: 'admin deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }
};
