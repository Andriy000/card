// import Card from '../model/card.model.js'

// export const getAllProducts = async (req, res) => {
//   try {
//     const products = await Product.find().populate('comments');
//     res.json(products);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// export const createProduct = async (req, res) => {
//   const product = new Product(req.body);
//   try {
//     const newProduct = await product.save();
//     res.status(201).json(newProduct);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// export const getProductById = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id).populate('comments');
//     if (!product) return res.status(404).json({ message: 'Product not found' });
//     res.json(product);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };


// export const updateProduct = async (req, res) => {
//   try {
//     const updatedProduct = await Product.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
//     res.json(updatedProduct);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// export const deleteProduct = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (!product) return res.status(404).json({ message: 'Product not found' });

//     await product.remove();
//     res.json({ message: 'Product deleted' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };


// getAllProducts, createProduct,getProductById ,updateProduct, deleteProduct

import Card from '../model/card.model.js'

export const getAllCards = async (req, res) => {
  try {
    const cards = await Card.find()
    res.json(cards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createCard = async (req, res) => {
  const card = new Card(req.body);
  try {
    const newCard = await card.save();
    res.status(201).json(newCard);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};




getAllCards, createCard