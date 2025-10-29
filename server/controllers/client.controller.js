import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";
import User from "../models/User.js";
import Transaction from "../models/Transaction.js";
import getCountryIso3 from "country-iso-2-to-3";

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
    const { page = 0, pageSize = 20, sort = null, search = "" } = req.query;

    // Sorting
    const sortResult = () => {
      if (!sort) return {};
      try {
        const sortParsed = JSON.parse(sort);
        return { [sortParsed.field]: sortParsed.sort === "asc" ? 1 : -1 };
      } catch (err) {
        return {};
      }
    };

    const sortedResult = sortResult();

    // Common filter for both
    const filter = {
      $or: [{ cost: { $regex: new RegExp(search, "i") } }],
    };

    const transactions = await Transaction.find(filter)
      .sort(sortedResult)
      .skip(page * pageSize)
      .limit(pageSize);

    const total = await Transaction.countDocuments(filter);

    res.status(200).json({ transactions, total });
  } catch (error) {
    console.error("🚀 ~ getTransactions ~ error:", error.message);
    res.status(400).json({ error: error.message });
  }
};

export const getGeography = async (req, res) => {
  try {
    const users = await User.find();
    const locations = users.reduce((acc, { country }) => {
      const countryIso3 = getCountryIso3(country);

      if (!acc[countryIso3]) {
        acc[countryIso3] = 0;
      }
      acc[countryIso3]++;
      return acc;
    }, {});

    const mappedLocations = Object.entries(locations).map(
      ([country, count]) => {
        return { id: country, value: count };
      }
    );
    res.status(200).json(mappedLocations);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default { getProducts, getCustomers, getTransactions, getGeography };
