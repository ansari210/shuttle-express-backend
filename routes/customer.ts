import { Router } from "express";
import { handleCustomerController } from "../controllers/customer";
import customer from "../models/customer";

const router = Router();

router.post("/create", handleCustomerController);

export default router;
