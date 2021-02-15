import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import adminRoute from '../routes/adminRoutes';
import clientRoute from '../routes/clientRoutes';

const app = express();

app.get('/', (req, res) => {
   res.send('server running');
});

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use('/auth', adminRoute);
app.use('/client', clientRoute);

export default app;
