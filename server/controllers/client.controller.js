import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";
import User from "../models/User.js";

export const getProducts = async (req, res) => {
  try {
    const product = await Product.find().populate("stats");

    if (!product) {
      res.status(404).json({ message: "Product Not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: ", error" });
  }
};

export const getCustomers = async (req, res) => {
  try {
    const customers = await User.find({ role: "user" }).select("-password");
    res.status(200).json(customers);
  } catch (error) {
    res.status(400).json({ error: ", error" });
  }
};

export default { getProducts, getCustomers };
