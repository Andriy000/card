import mongoose from "mongoose";

const CardSecondSchema = new mongoose.Schema({
  id : { type: String, required: true },
  title : { type: String, required: false },
  text :{ type: String, required: false },
  owner: {
    author: { type: String, required: true },
    job: { type: String, required: true }
  },
  score:  { type: String, required: true }
}, { versionKey: false });

const CardSecond = mongoose.model('CardSecond', CardSecondSchema);

export default CardSecond;