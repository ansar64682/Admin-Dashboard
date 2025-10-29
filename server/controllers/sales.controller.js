import OverallStats from "../models/OverallStats.js";
export const getSales = async (req, res) => {
  try {
    const sales = await OverallStats.find();
    if (!sales) {
      res.status(400).json({ error: error.message });
    }
    res.status(200).json(sales);
  } catch (error) {
    res.status(401).json({ error: error.message });
    console.log("🚀 ~ getSales ~ error: error.message:", error.message);
  }
};

export default { getSales };
