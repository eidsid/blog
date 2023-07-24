import mongoose from "mongoose";
const connect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("conected to db");
  } catch (error) {
    throw new Error("Connections Failed!", error.message);
  }
};

export default connect;
