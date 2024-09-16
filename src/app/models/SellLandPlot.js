import mongoose, { Schema } from "mongoose";


const sellLandPlot = new Schema({
    name: {
      type: String,
      required: true,
    },
    mob_Number: {
      type: Number,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    survey_Number: {
      type: Number,
      required: true,
    },
    FP: {
      type: Number,
      required: true,
    },
    zone: {
      type: String,
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


const SellLandPlot = mongoose.models.SellLandPlot || mongoose.model('SellLandPlot', sellLandPlot);

export default SellLandPlot;