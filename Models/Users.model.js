const mongoose = require('mongoose');
const {Schema} = mongoose;

//SCHEMA IS ACT AS A BLUEPRINT OF COLLECTION IN DB FOR ACCESSING IT THROUGH MODEL

const userSchema  = new Schema({

  firstName:String,
  lastName:String,
  dob:Date,
  email:String,
  phoneNumber:Number,
  gender:String,
  age:Number,
  address:{
    addressLine1:String,
    addressLine2:String,
    
  },
  city:String,
  state:String,
  pinCode:Number,
  createdDate:{
    type:Date,
    default:new Date()},
    updatedDate:{
    type:Date,
    default:new Date()}

})


module.exports = mongoose.model('users',userSchema);