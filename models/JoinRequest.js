import mongoose from "mongoose";

const joinRequestSchema = new mongoose.Schema({
    projectId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Project",
    },
    requestedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
    },
    status:{
        type:String,
        enum:["Pending" , "Accepted" , "Declined"],
        default :"Pending",
    }
},{
    timestamps:true,
})

export default mongoose.model("joinRequests",joinRequestSchema);