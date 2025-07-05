import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    avatar:{
        type:String,
    },
    skills:[String],
    bio:{
        type:String,
    },
    joinedProjects:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Project"
    }],
    invitedProjects:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Project"
    }],
},{
    timestamps:true
})

export default mongoose.model("users",userSchema)