import mongoose from "mongoose";

const { Schema, model, models } = mongoose;
const contactSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    message: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);
const contacts = models.contacts || model("contacts", contactSchema);

export default contacts;
