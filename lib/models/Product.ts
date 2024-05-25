import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: String,
  title: String,
  collections: [{ type: mongoose.Schema.Types.ObjectId, ref: "Collection" }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;