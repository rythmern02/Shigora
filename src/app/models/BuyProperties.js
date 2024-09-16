import mongoose, { Schema } from "mongoose";

const buyPropertySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  infoUrl: {
    type: String,
    required: true,
  },
  FP: {
    type: Number, // Assuming FP is an integer, e.g., Financial Price or Floor Plan
    required: true,
  },
  village: {
    type: String,
    required: true,
  },
  zone: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  }
}, { timestamps: true });


const BuyProperties = mongoose.models.BuyProperty || mongoose.model('BuyProperty', buyPropertySchema);

export default BuyProperties;