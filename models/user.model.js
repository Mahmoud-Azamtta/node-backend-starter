import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      min: 3,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: Object,
    },
    phoneNumber: {
      type: String,
    },
    address: {
      type: String,
    },
    isEmailConfirmed: {
      type: Boolean,
      default: false,
    },
    confirmationCode: {
      type: String,
      default: null,
    },
    status: {
      type: String,
      default: "Active",
      enum: ["Active", "Inactive"],
    },
    role: {
      type: String,
      default: "User",
      enum: ["User", "Admin"],
    },
  },
  {
    timestamps: true,
  },
);

const userModel = mongoose.models.user || model("user", userSchema);
export default userModel;
