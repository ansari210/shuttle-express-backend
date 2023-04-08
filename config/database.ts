import { connect } from "mongoose";

export const databaseConnect = async () => {
  await connect(`${process.env.MONGODB_URI}`)
    .then(() => {
      console.log("Connected to database");
    })
    .catch((error: any) => {
      console.log("Error connecting to database", error);
    });
};

export default databaseConnect;