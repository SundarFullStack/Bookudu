const mongoose = require("mongoose");
const { Schema } = mongoose;

const mahalSchema = new Schema({
  mahalName: String,
  mahalFeatures: {
    seatingCapacity: Number,
    parking: Boolean,
    dinningCapacity: Number,
  },
  pricingDetails: {
    pricePerHour: Number,
    pricingPerDay: Number,
  },
  address: {
    addressLine1: String,
    addressLine2: String,
  },
  contact: String,
  createdBy: String,
  createdDate: { type: Date, default: new Date() },
  updatedBy: String,
  updatedDate: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("mahal", mahalSchema);
