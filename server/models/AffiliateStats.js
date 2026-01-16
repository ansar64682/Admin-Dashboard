import mongoose, { Mongoose, Schema } from "mongoose";

const AffiliateStatsSchema = new ongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    affiliateSales: {
      type: mongoose.Types.ObjectId,
      ref: "Transactions",
    },
  },
  { timestamps: true }
);

const AffiliateStats = mongoose.model("AffiliateStats", AffiliateStatsSchema);

export default AffiliateStats;
