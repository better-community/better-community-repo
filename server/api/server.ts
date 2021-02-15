import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import adminRoute from '../routes/adminRoutes';

const app = express();

app.get('/', (req, res) => {
   res.send('server running');
});

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use('/auth', adminRoute);

export default app;
