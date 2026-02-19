import express from 'express'
const app=express()
app.listen(8080,()=>{
    console.log("server is running at http://localhost:8080")
})
app.get("/",(req,res)=>{
    res.send();
})
app.get("/:name",(req,res)=>{
    res.send("Hello "+req.params.name);
})
// app.get("/",(req,res)=>{
//     res.send("Hello "+req.query.name+req.query.age);
// })