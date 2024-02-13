import mongoose from "mongoose";
const { Schema } = mongoose;

const categorySchema = new Schema({
  label: String,
});

const categoryModel = mongoose.model("categories", categorySchema);

export default categoryModel;
