import cors from "cors";
import "dotenv/config";
import dotenv from "dotenv"
import express, { Express } from "express";
import { createServer } from "http";
import { databaseConnect } from "./config/database";
import customerRoutes from "./routes/customer"

dotenv.config();

dotenv.config({
  path: `.env`,
  override: true,
});

// INITIALIZING EXPRESS
const app: Express = express();
const server = createServer(app);
const port = process.env.PORT;
app.use(cors());

// Connected to database
databaseConnect();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

//get api 
app.get("/", (req, res) => {
    res.status(200).json({sucess:true, message: "API is working.."})
});

// Routes
app.use("/api/customer", customerRoutes)

//POST listen
server.listen(port, () => {
    console.log(`Server Running http://localhost:${port}`);
})

