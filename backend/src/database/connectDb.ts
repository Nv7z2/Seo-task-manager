import { connect, ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

//mongodb+srv://nv7z2:<password>@tasks.tsxqzno.mongodb.net/?retryWrites=true&w=majority

connect(`mongodb+srv://nv7z2:${process.env.DB_PASSWORD}@tasks.tsxqzno.mongodb.net/task_manager?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB', error);
  });

export default connect;