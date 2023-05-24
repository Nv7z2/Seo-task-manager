import express from 'express';
import database from './src/database/connectDb';

import authRoutes from './src/routes/authRoutes';
import userRoutes from './src/routes/userRoutes';

const app = express();

database.connect();

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/user', userRoutes);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
