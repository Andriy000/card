import mongoose from "mongoose";

const CardSchema = new mongoose.Schema({
  id : { type: String, required: true },
  title : { type: String, required: false },
  type: { type: String, enum: ['villa', 'house', 'apartment'], required: true },
  price: { type: String, required: true },
  owner: {
    author: { type: String, required: true },
    location: { type: String, required: true }
  },
  badge: { type: String, enum: ['new-house', 'best-deals', 'popular'], required: true },
}, { versionKey: false });

const Card = mongoose.model('Card', CardSchema);

export default Card;
