import ThirdCard from "../model/cardThird.model.js";

export const getAllThirdCards = async (req, res) => {
try {
  const cards = await ThirdCard.find();
  res.json(cards)
} catch (error) {
  res.status(500).json({message: error.message})
}
}

export const createThirdCards = async (req, res) => {
  const card = new ThirdCard(req.body);
  try {
    const newCard = await card.save();
    res.status(201).json(newCard);
  } catch (error) {
    res.status(500).json({message: error.message})
  }
  }