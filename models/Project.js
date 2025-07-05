import mongoose from "mongoose"

const ProjectSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    description:{
        type:String,
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    teamCode:{
        type:String,
        unique:true
    },
    ImageUrl:{
        type:String,
    },
    visibility:{
        type:String,
        enum:["Public", "Private"],
        default:"Private",
    },
    members: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
      role: {
        type: String,
        enum: ['admin', 'sublead', 'member', 'viewer'],
        default: 'member'
      },
      joinedAt: Date
    }
  ],
  pendingRequests:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"users",
  }],
  tasks:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"tasks"
  }],
  chats:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"chats",
  }],
  meetings:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"meetings",
  }]
},{
    timestamps:true
});

export default mongoose.model("Project",ProjectSchema);


