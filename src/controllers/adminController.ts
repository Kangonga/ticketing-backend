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
    const admin = new Admin({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      // additional fields for admin model
    });

    try {
      const newadmin = await admin.save();
      res.status(201).json(newadmin);
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
      const admin = await Admin.findById(req.params.id);
      if (!admin) {
        return res.status(404).json({ message: 'admin not found' });
      }

      // additional fields for admin model

      const updatedadmin = await admin.save();
      res.json(updatedadmin);
    } catch (err) {
      res.status(400).json({ message: err });
    }
  },

  async deleteadminById(req: Request, res: Response) {
    try {
      const admin = await Admin.findById(req.params.id);
      if (!admin) {
        return res.status(404).json({ message: 'admin not found' });
      }
    //   await admin.remove();
      res.json({ message: 'admin deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }
};
