import mongoose from "mongoose";

const ToDoPersonalScehama = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
  title:{
    type:String,
     required:true,
  },
  description:{
    type:String,
  },
  dueDate:{
    type:Date,
  },
  status:{
    type:String,
    enum:["Pending" , "In Progress" , "Completed"],
    default:"Pending",
  },
  priority:{
    type:String,
    enum:["Low","Moderate","High","Urgent"],
    default:"Moderate",
  }
},{
    timestamps:true
})

export default mongoose.model("todopersonal",ToDoPersonalScehama);