import express from 'express';
import connectDB from './config/db';

const app = express();

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});