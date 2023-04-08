import { model, Schema } from "mongoose";

export interface Customers extends Document {
  driverphone: string;
  drivername: string;
  driveraddress: string;
  vendorname: string;
  vendorphone: string;
}

const customerSchema = new Schema<Customers>(
    {
        driverphone:{
            type: String,
            required:false
        },
        drivername:{
            type: String,
            required:false
        },
        driveraddress:{
            type: String,
            required:false
        },
        vendorname:{
            type: String,
            required:false
        }, 
        vendorphone:{
            type: String,
            required:false
        }
    },
    {
        timestamps: true
    }
);

export default model<Customers>("customers", customerSchema)