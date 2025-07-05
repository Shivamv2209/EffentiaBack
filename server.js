import express from "express"
import db from "./config/mongooseConfig.js"
import userRouter from "./routes/userRoutes.js"
import cors from "cors";


const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/auth",userRouter);
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})