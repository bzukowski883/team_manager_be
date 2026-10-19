import calendarRouter from "./routes/calendar.js";
import * as Controllers from "./controllers/index.js"
import * as Services from "./services/index.js"
import * as Repositories from "./repositories/index.js"
import testRouter from "./routes/test.js";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Connect to MongoDB
await mongoose
  .connect("mongodb://mongo:27017/team_manager")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

const db = mongoose.connection.db

// Define a schema and model
const User = mongoose.model(
  "User",
  new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true }
  })
);

//repositories
const CalendarRepo = new Repositories.CalendarRepository(db)

//services
const CalendarServ = new Services.CalendarService(CalendarRepo)

//Controllers
const CalendarCont = new Controllers.CalendarController(CalendarServ)

//Routes
app.use("/calendar", calendarRouter(CalendarCont));
app.use("/api", testRouter)

// Middleware
app.use(cors());
app.use(express.json());

// Start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Connect to routes with Express
app.use("/auth", authRoutes);