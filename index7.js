import express from 'express'
const app=express()
app.listen(8080,()=>{
    console.log("Server is listening at http://localhost:8080")
})
app.get("/",(req,res)=>{
    const user=
    {
        name:"John",
        email:"john@gmail.com",
        role:"student"
    }
    res.send(user)
})