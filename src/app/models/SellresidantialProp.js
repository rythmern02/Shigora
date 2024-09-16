import mongoose, { Schema } from "mongoose";


const sellResidentialProp = new Schema({
  name: {
    type: String,
    required: true,
  },
  mob_Number: {
    type: Number,
    required: true,
  },
  village: {
    type: String,
    required: true,
  },
  project_Name: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  plot_Number: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  file_url: {
    type: String,
    required: true,
  }
}, { timestamps: true });

const SellResidentialProp = mongoose.models.SellResidentialProperty || mongoose.model('SellResidentialProperty', sellResidentialProp);

export default SellResidentialProp;