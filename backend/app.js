import bodyParser from 'body-parser';
import express from 'express';
import 'module-alias/register';

import '~db/connectDb';
import '~gql/graphqlServer';

import authRoutes from '~routes/authRoutes';
import userRoutes from '~routes/userRoutes';

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/auth', authRoutes);
app.use('/user', userRoutes);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
