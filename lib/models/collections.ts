import mongoose from "mongoose";

const CollectionSchema = new mongoose.Schema({
  name: String,
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Collection = mongoose.models.Collection || mongoose.model("Collection", CollectionSchema);

export default Collection;