import dotenv from 'dotenv';
import express from 'express';
import connectDB from './db/connectToMongo.js';
import bodyParser from 'body-parser';
import cardRoute from './routes/card.route.js'
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors({
  origin: '*',
  methods: 'GET, POST',
  allowedHeaders: 'Content-Type, Authorization', 
}));
app.use(bodyParser.json());


connectDB();
app.use('/api/cards', cardRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
