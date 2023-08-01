const mongoose = require('mongoose');
const{Schema} = mongoose;

const mahalSchema = new Schema({


  mahalName:String,
  mahalFeatures:{
    seatingCapacity:Number,
    parking:Boolean,
    dinningCapacity:Number,
  },
  pricingDetails:{
    pricePerHour:Number,
    pricingPerDay:Number,
  },
   address:{
    addressLine1:String,
    addressLine2:String,
  },
  contact:String,
  createdBy:String,
  createdDate:Date,
  updatedBy:String,
  updatedDate:Date,


})

module.exports = mongoose.model('mahal',mahalSchema);