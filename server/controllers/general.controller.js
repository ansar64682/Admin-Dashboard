import User from "../models/User.js";
import OverallStats from "../models/OverallStats.js";
import Transaction from "../models/Transaction.js";

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);
    if (!user) {
      console.log("error 404 not found");
    }

    res.status(200).json(user);
  } catch (error) {
    console.log("🚀 ~ getUser ~ error:", error);

    res.status(400).json({ message: error });
  }
};

export const getDashboard = async (req, res) => {
  try {
    // placeholder vals

    const curMonth = "November";
    const curYear = 2021;
    const curDate = "2021-11-15";

    const transactions = await Transaction.find()
      .limit(50)
      .sort({ createdOn: -1 });

    const overAllStats = await OverallStats.find({ year: curYear });

    const {
      totalCustomers,
      yearlySalesTotal,
      yearlyTotalSoldUnits,
      monthlyData,
      salesByCategory,
    } = overAllStats[0];

    const thisMonthStats = overAllStats[0].monthlyData.find(({ month }) => {
      return month === curMonth;
    });

    const thisDay = overAllStats[0].dailyData.find(({ date }) => {
      return date === curDate;
    });
    console.log("🚀 ~ getDashboard ~ thisDay:", thisDay);

    res.status(200).json({
      totalCustomers,
      yearlySalesTotal,
      yearlyTotalSoldUnits,
      monthlyData,
      salesByCategory,
      thisMonthStats,
      thisDay,
      transactions,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
    console.log("🚀 ~ getDashboard ~ err.message:", err.message);
  }
};

export default { getUser };
