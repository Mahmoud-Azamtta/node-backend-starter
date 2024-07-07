import { Schema, model } from "mongoose";

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: Object,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
});

const categoryModel = model("category", categorySchema);
export default categoryModel;
