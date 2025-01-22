import dotenv from 'dotenv';
import express from 'express';
import connectDB from './db/connectToMongo.js';
import bodyParser from 'body-parser';
import CardRoute from './routes/card.route.js';
import CardSecondRoute from './routes/cardSecond.route.js';
import cors from 'cors';

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());

connectDB();
app.use('/api/cards', CardRoute);
app.use('/api/cards/second', CardSecondRoute);  

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
