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
