import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    text:{
        type:String,
        required:true,
    },
    completed:{
        type:Boolean,
        default:false,
    }
});

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    project:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Project"
    },
    priority:{
        type:String,
        enum:["Low","Moderate","High","Urgent"],
        default:"Moderate",
    },
    status:{
        type:String,
        enum:["Pending","In Progress","Completed"],
        default:"Pending",
    },
    dueDate:{
        type:Date,
        required:true,
    },
    assignedTo:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }],
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    attachments:{
        type:String,
    },
    completedAt:{
        type:Date,
        required:true,
    },
    todoCheckList:[todoSchema],
    createdAt:{
        type:Date,
    }
})

export default mongoose.model("tasks",taskSchema);
