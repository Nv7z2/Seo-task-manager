import express from 'express';
import bodyParser from 'body-parser';

import database from './src/database/connectDb';
import graphqlServer from './src/graphql/graphqlServer';

import authRoutes from './src/routes/authRoutes';
import userRoutes from './src/routes/userRoutes';

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/auth', authRoutes);
app.use('/user', userRoutes);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
