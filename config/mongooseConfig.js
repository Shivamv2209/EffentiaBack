import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const uri = process.env.MONGO_URI;

mongoose.connect(uri).then(()=>{
    console.log(`database connected`)
}).catch((err)=>{
    console.log(err)
})

export default mongoose.connection;