require("dotenv").config();

if (!process.env.MONGO_URL) {
  console.error("Missing MONGO_URL in .env file");
  process.exit(1);
}

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");

const userRoutes = require("./routes/user");
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const orderRoutes = require("./routes/order");

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(
  cors({
    origin: [
      "https://zerodha-himanshu.onrender.com",
      "https://zerodha-himansh.onrender.com",
    ],
    credentials: true,
  })
);
app.use(helmet());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  });

// Routes
app.use("/api/user", userRoutes);

app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching holdings", error: err.message });
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching positions", error: err.message });
  }
});

app.use("/api/order", orderRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening to PORT: ${PORT}`);
});
