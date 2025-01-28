import express from 'express';
import { getAllThirdCards, createThirdCards } from '../controllers/cardThird.controller.js';

const router = express.Router();

router.get("/get-third-cards", getAllThirdCards);  // правильний маршрут
router.post("/create-third", createThirdCards);  // правильний маршрут

export default router;
