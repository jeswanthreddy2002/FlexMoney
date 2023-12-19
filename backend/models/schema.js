import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  { Name: {
    type: String,
    required: true,
  },
  Age: {
    type: Number,
    required: true,
  },
    Email: {
      type: String,
      required: true,
    },
    BatchPreference: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


const value = mongoose.model("pay", Schema,"pay");

export default value;