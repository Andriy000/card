import CardSecond from '../model/cardSecond.model.js';


export const getAllSecondCards = async (req, res) => {
  try {
    const cards = await CardSecond.find();
    res.json(cards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const createSecondCard = async (req, res) => {
  const card = new CardSecond(req.body);
  try {
    const newCard = await card.save();
    res.status(201).json(newCard);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
