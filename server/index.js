const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const path = require("path");

dotenv.config();

const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 8000;
const allowedOrigins = [
  process.env.FRONTEND_ORIGIN,
  "http://localhost:5173",
  "http://127.0.0.1:5173",
].filter(Boolean);

connectDB();

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  }),
);
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/users", userRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res
    .status(err.status || 500)
    .json({ message: err.message || "Server Error" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
