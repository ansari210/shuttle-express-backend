import "dotenv/config";
import express, { Express } from "express";
import { createServer } from "http";
import cors from "cors";
import { databaseConnect } from "./config/database";
const mongoose = require("mongoose");
import customerRoutes from "./routes/customer";

mongoose.set("strictQuery", false);

// INITIALIZING EXPREESS
const app: Express = express();
const server = createServer(app);
const port = process.env.PORT;
app.use(cors());
databaseConnect();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// PORT LISTEN
server.listen(port, () => {
  console.log(`Server Runnig http://localhost:${port}`);
});

//ROUTES
app.get("/", (req, res) => {
  res.status(200).json({ name: "Api Worked Fine" });
});

// Customer Routes
app.use("/api/customer", customerRoutes);
