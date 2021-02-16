import express from 'express';
import { add, getAll, getById, remove, update } from '../models/clientModel';


const route = express.Router();

route.get('/issues', async (req, res) => {
   try {
      const issues = await getAll();
      res.status(200).json(issues);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

route.post('/issue', async (req, res) => {
   try {
      const [newIssue] = await add(req.body);
      res.status(201).json(newIssue);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

route.get('/issue/:id', async (req, res) => {
   const id = Number(req.params.id);

   try {
      const issue = await getById(id);
      res.status(200).json(issue);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

route.patch('/update-issue/:id', async (req, res) => {
   const id = Number(req.params.id);

   try {
      await update(id, req.body);
      res.status(200).json({ message: 'Updated' });
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

route.delete('/remove-issue/:id', async (req, res) => {
   const id = Number(req.params.id);

   try {
      await remove(id);
      res.status(200).json({ message: "deleted" });
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

export default route;
