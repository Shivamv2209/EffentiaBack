import mongoose from "mongoose";

const InvitationSchema = new mongoose.Schema({
    projectId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Project",
    },
    email:{
        type:String
    },
    token:{
        type:String,
    },
    status:{
        type:String,
        enum:["accepted" , "Pending" , "Declined"],
        default:"Pending",
    },
    invitedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
    },
    expiresAt:{
        type:Date
    }
},{
    timestamps:true,
});

export default mongoose.model("invitations",InvitationSchema);