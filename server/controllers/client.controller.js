import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";
import User from "../models/User.js";
import Transaction from "../models/Transaction.js";

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

export const getTransactions = async (req, res) => {
  try {
    const { page = 1, pageSize = 20, sort = null, search = " " } = req.query;

    //sort
    const sortResult = () => {
      if (!sort) {
        return {};
      }
      try {
        const sortParsed = JSON.parse(sort);
        const sortedResult = {
          [sortParsed.field]: (sortParsed.sort = "asc" ? 1 : -1),
        };
        return sortedResult;
      } catch (err) {
        return {};
      }
    };

    const sortedResult = Boolean(sort) ? sortResult() : {};

    const transactions = await Transaction.find({
      $or: [{ cost: { $regex: new RegExp(search, "i") } }],
    })
      .sort(sortedResult)
      .skip(page * pageSize)
      .limit(pageSize);

    const total = await Transaction.countDocuments({
      name: { $regex: search, $options: "i" },
    });
    res.status(200).json({ transactions, total });
    console.log(
      "🚀 ~ getTransactions ~ transactions, total:",
      transactions,
      total
    );
  } catch (error) {
    console.log("🚀 ~ getTransactions ~ error:", error.message);
    res.status(400).json({ error: ", error" });
  }
};

export default { getProducts, getCustomers, getTransactions };
