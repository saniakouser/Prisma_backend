const express =require("express");
const cookieParser= require("cookie-parser")
const app= express();
const userRouter= require("./routes/user.js")
require("dotenv").config();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}))

app.use("/api",userRouter)
app.get("/",(req,res)=>{
    res.send("hello i am sania")
})
app.listen(3000,()=>{
    console.log("app is listening on port 3000")
})