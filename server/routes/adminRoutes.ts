import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { add, remove, getBy, } from '../models/adminModel';
import { jwtSecret, rounds } from '../envVariables';


const route = express.Router();

// @POST auth/register
route.post('/register', async (req, res) => {
   const admin = req.body;

   const hashPassword = bcrypt.hashSync(admin.password, rounds);
   admin.password = hashPassword;

   try {
      const [newAdmin] = await add(admin);
      res.status(201).json(newAdmin);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

// @POST auth/login
route.post('/login', async (req, res) => {
   const { email, password } = req.body;

   try {
      const [admin] = await getBy({ email });

      if(admin && bcrypt.compareSync(password, admin.password)) {
         const token = generateToken(admin);
         res.status(200).json({ token });
      } else {
         res.status(400).json({ message: 'Invalid email or password' });
      }
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

// @DELETE auth/delete/:id
route.delete('/delete/:id', async (req, res) => {
   const { id } = req.params;

   try {
      const admin = await remove(Number(id));
      res.status(200).json(admin);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

function generateToken(admin: any) {
   if(!jwtSecret) return null;

   const payload = {
      user: admin.email,
      created_at: admin.created_at
   };
   const options = {
      expiresIn: '1h'
   };
   return jwt.sign(payload, jwtSecret, options);
}

export default route;
