import mongoose, { Mongoose, Schema } from "mongoose";

const AffiliateStatsSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    affiliateSales: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const AffiliateStats = mongoose.model("AffiliateStats", AffiliateStatsSchema);

export default AffiliateStats;
