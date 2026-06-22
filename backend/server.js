require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const authRoutes =
require("./routes/authRoutes");
app.use(
  "/api/auth",
  authRoutes
);

const boutiqueRoutes = require("./routes/boutiqueRoutes");

app.use("/api/boutiques", boutiqueRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running");
});

const portfolioRoutes = require("./routes/portfolioRoutes");

app.use("/api/portfolio", portfolioRoutes);

const requestRoutes = require("./routes/requestRoutes");

app.use("/api/requests", requestRoutes);

const responseRoutes = require("./routes/responseRoutes");

app.use("/api/responses", responseRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});