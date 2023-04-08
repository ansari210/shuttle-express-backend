import { Request, Response } from "express";
import customer from "../models/customer";

export const handleCustomerController = async (req: Request, res: Response) => {
  const { driverphone, drivername, driveraddress, vendorname, vendorphone } =
    req.body;

  // fields fields
  if (!drivername || !driverphone) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are fields" });
  }

  try {
    const payload = {
      driverphone,
      drivername,
      driveraddress,
      vendorname,
      vendorphone,
    };
    console.log("payload :: ", payload);

    const createCustomer = await customer.create(payload);
    res.json({
      success: true,
      message: "Customer Created Successfully.",
    });
  } catch (error: any) {
    res.status(500).send(error);
    console.log("Inside catch block");
  }
};
