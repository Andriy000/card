import mongoose from "mongoose";

const ThirdCardSchema = new mongoose.Schema({
  id: { type: String, required: true },
  authorName: { type: String, required: true },
  text: { type: String, required: true },
  time: { type: String, required: true }
}, {versionKey: false});

const ThirdCard = mongoose.model('ThirdCard', ThirdCardSchema);

export default ThirdCard;
