import { timeStamp } from "console";
import mongoose from "mongoose";

export const ProductSchema = new mongoose.Schema(
  {
    name: String,
    price: String,
    description: String,
    category: String,
    rating: Number,
    supply: Number,
  },
  { timestamps: true }
);

ProductSchema.virtual("stats", {
  ref: "ProductStat",
  localField: "_id",
  foreignField: "productId",
  justOne: true,
});

ProductSchema.set("toObject", { virtuals: true });
ProductSchema.set("toJSON", { virtuals: true });

const Product = mongoose.model("Product", ProductSchema);
export default Product;
