const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Models
const OrderSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
  createdAt: { type: Date, default: Date.now },
});
const Order = mongoose.model("Order", OrderSchema);

const HoldingSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  price: Number,
  avg: Number,
  net: String,
  day: String,
  isDown: Boolean,
  isLoss: Boolean,
});
const Holding = mongoose.model("Holding", HoldingSchema);

// Utility to compute extra fields
function computeHoldingMetrics(avg, price, qty) {
  const currentValue = price * qty;
  const investedValue = avg * qty;
  const profitLoss = currentValue - investedValue;

  const net = profitLoss.toFixed(2);
  const isLoss = profitLoss < 0;

  const randomDayChange = (Math.random() * 4 - 2).toFixed(2); // -2% to +2%
  const day = `${randomDayChange > 0 ? "+" : ""}${randomDayChange}%`;
  const isDown = Number(randomDayChange) < 0;

  return { net, day, isDown, isLoss };
}

// POST /api/order/new
router.post("/new", async (req, res) => {
  const { name, qty, price, mode } = req.body;

  try {
    const order = new Order({ name, qty, price, mode });
    await order.save();

    const existingHolding = await Holding.findOne({ name });

    if (mode === "BUY") {
      if (existingHolding) {
        const newQty = existingHolding.qty + qty;
        const newAvg =
          (existingHolding.avg * existingHolding.qty + price * qty) / newQty;

        existingHolding.qty = newQty;
        existingHolding.avg = newAvg;

        const simulatedPrice = price + (Math.random() * 10 - 5);
        existingHolding.price = parseFloat(simulatedPrice.toFixed(2));

        const metrics = computeHoldingMetrics(newAvg, price, newQty);
        Object.assign(existingHolding, metrics);

        await existingHolding.save();
      } else {
        const metrics = computeHoldingMetrics(price, price, qty);

        const newHolding = new Holding({
          name,
          qty,
          avg: price,
          price,
          ...metrics,
        });

        await newHolding.save();
      }
    } else if (mode === "SELL") {
      if (existingHolding) {
        const newQty = existingHolding.qty - qty;

        if (newQty <= 0) {
          await Holding.deleteOne({ name });
        } else {
          existingHolding.qty = newQty;

          const metrics = computeHoldingMetrics(
            existingHolding.avg,
            price,
            newQty
          );

          const simulatedPrice = price + (Math.random() * 10 - 5);
          existingHolding.price = parseFloat(simulatedPrice.toFixed(2));

          Object.assign(existingHolding, metrics);

          await existingHolding.save();
        }
      }
    }

    res.status(201).json({ message: "Order placed and holdings updated" });
  } catch (err) {
    res.status(500).json({
      message: "Error placing order or updating holdings",
      error: err.message,
    });
  }
});

// GET /api/order/all
router.get("/all", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({
      message: "Error fetching orders",
      error: err.message,
    });
  }
});

module.exports = router;
