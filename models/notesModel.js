import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Tag: {
    type: String,
    required: true,
  },
});

export default mongoose.model("notes", notesSchema);
