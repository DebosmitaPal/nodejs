import express from 'express'
const app=express()
app.listen(8080,()=>{
    console.log("Server running at http://localhost:8080")
});
app.get("/:id",(req,res)=>{
    console.log(req.url)
    res.send(req.params.id)
})
app.get("/:id/:email",(req,res)=>{
    console.log(req.url)
    console.log(req.params)
    res.send(req.params.id+req.params.email)
})
app.get("/id/:id/email/:email",(req,res)=>{
    console.log(req.url)
    console.log(req.params)
    res.send(req.params.id+req.params.email)
})
app.get("/home",(req,res)=>{
    res.send("Hello world")    //this will give output as home because first one is matching as per id
})