const mongoose = require('mongoose');
const{Schema} = mongoose;

const bookingSchema = new Schema({

  mahalId:Schema.Types.ObjectId,
  cutomerId:Schema.Types.ObjectId,
  bookingDetails:{
    startDate:Date,
    endDate:Date,
    totalBookingPrice:Number,
  },
   contact:String,
  createdBy:Schema.Types.ObjectId,
  createdDate:Date,
  updatedBy:Schema.Types.ObjectId,
  updatedDate:Date,

})


module.exports = mongoose.model("bookings",bookingSchema)