import mongoose from "mongoose";

const userAnalyticsSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
  totalTasksAssigned: Number,
  tasksCompleted: Number,
  meetingsAttended: Number,
  responseRate: Number, 
  avgCompletionTime: Number, 
  lastUpdated: { type: Date, default: Date.now }
});

export default mongoose.model("userAnalytics",userAnalyticsSchema);
