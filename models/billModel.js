const mongoose = require("mongoose");

const billSchema = mongoose.Schema({
  patientName: { type: String, required: true },
  patientPhoneNumber : {type:String , required:true},
  totalAmount: { type: Number, required: true },
  tax: { type: Number, required: true },
  subTotal: { type: Number, required: true },
  paymentMode : {type:String , required:true},
  cartItems : {type:Array , required:true}
}, {timestamps : true});

const billModel = mongoose.model("bills", billSchema);

module.exports = billModel;
