import express from 'express'
const app=express()
app.listen(8080,()=>{
    console.log("server is running at http://localhost:8080")
})
app.get("/",(req,res)=>{
    console.log(req.headers)
    res.send();
})