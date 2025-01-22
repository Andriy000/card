import express from 'express';
import { getAllSecondCards, createSecondCard } from '../controllers/cardSecond.controller.js';

const router = express.Router();

router.get("/get-second-cards", getAllSecondCards);  // правильний маршрут
router.post("/create-second", createSecondCard);  // правильний маршрут

export default router;
