//sending status code
import express from 'express'
const app=express()
app.get("/",(req,res)=>{
   res.status(201).json({message:"Hello world"});
})
app.listen(8080,()=>{
    console.log("Server is running at http://localhost:8080")
})