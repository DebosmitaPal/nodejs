import {products} from "../models/productModel.js"
const getProducts = (req, res) => {
  res.json(products);
};

const createProduct = (req, res) => {
  res.send("This is post request");
};
export {getProducts,createProduct}