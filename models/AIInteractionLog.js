import mongoose from "mongoose";

const aiInteractionLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
  prompt: String,
  response: String,
  timestamp: { type: Date, default: Date.now },
  source: { type: String, enum: ["chat", "meeting", "task", "summary"] }
});

export default mongoose.model("aiInteractions","aiInteractionLogSchema");
