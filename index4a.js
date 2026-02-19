import express from 'express'
const app=express()
app.listen(8080,()=>{
    console.log("Server running at http://localhost:8080")
});
app.get("/:a/:b",(req,res)=>{
    let a=parseInt(req.params.a)
    let b=parseInt(req.params.b)
    res.send((a+b).toString())
})
app.get("/x/:x/y/:y/z/:z",(req,res)=>{
    let x=parseInt(req.params.x)
    let y=parseInt(req.params.y)
    let z=parseInt(req.params.z)
    res.send((x+y+z).toString())
})
app.get("/:a/:b/:c/:d",(req,res)=>{
    res.send("Hello students")
})
