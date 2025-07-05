import mongoose from "mongoose";

const MeetingSchema = new mongoose.Schema({
    projectdId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Project",
    },
    title:{
        type:String,
    },
    description:{
        type:String,
    },
    startTime:{
        type:Date,
    },
    endTime:{
        type:Date,
    },
    link:{
        type:String,
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    participants:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
    }],
    summary:{
        type:String,
    }
},{
    timestamps:true,
});

export default mongoose.model("meetings",MeetingSchema);