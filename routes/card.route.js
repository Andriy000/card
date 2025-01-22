import express  from "express";
import { getAllCards, createCard } from "../controllers/card.controller.js";


const router = express.Router();

router.get("/get-cards", getAllCards);
router.post("/create", createCard);


export default router;