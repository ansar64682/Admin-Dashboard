import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";

export const getProducts = async (req, res) => {
  try {
    const product = await Product.find().populate("stats");
    if (!product) {
      res.status(404).json({ message: "Product Not found" });
    }
    res.status(200).json(product);
    console.log("🚀 ~ getProducts ~ product:", product);
  } catch (error) {
    res.status(400).json({ error: ", error" });
  }
};

export default { getProducts };
