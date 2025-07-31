const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Stock name or UID
  qty: { type: Number, required: true },
  price: { type: Number, required: true },
  mode: { type: String, enum: ["BUY", "SELL"], default: "BUY" },
  createdAt: { type: Date, default: Date.now },
});

const OrdersModel = mongoose.model("Order", orderSchema);
module.exports = { OrdersModel };
