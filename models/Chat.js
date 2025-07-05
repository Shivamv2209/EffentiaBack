import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  projectId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Project"
  },
  sender:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"users",
  },
  message:{
    type:String,
  },
  timeStamp:{
    type:Date,
    default:Date.now
  }
});

export default mongoose.model("chats",chatSchema);