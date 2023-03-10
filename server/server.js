const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");

const app = express();
app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
dotenv.config({ path: "./config/config.env" });
connectDB();
const transactions = require("./routes/transactions");
const PORT = process.env.PORT || 5000;

app.use("/api/v1/transactions", transactions);
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/expense/build"));
  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../client", "expense", "build", "index.html")
    )
  );
}
app.listen(
  PORT,
  console.log(
    `Server is up and running in ${process.env.NODE_ENV} mode on port ${PORT}`
      .blue.bold
  )
);
