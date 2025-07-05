import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
  type: { type: String, enum: ["bug", "feature", "ui", "performance", "other"] },
  message: String,
  status: { type: String, enum: ["open", "reviewing", "resolved"], default: "open" },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("feedbacks",feedbackSchema);