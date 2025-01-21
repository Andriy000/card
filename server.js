import dotenv from 'dotenv';
import express from 'express';
import connectDB from './db/connectToMongo.js';
import bodyParser from 'body-parser';
import CardRoute from './routes/card.route.js'
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors({
  origin: 'http://localhost:5173' 
}));
app.use(bodyParser.json());


connectDB();
app.use('/api/cards', CardRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
