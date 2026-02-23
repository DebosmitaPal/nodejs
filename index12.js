//Router
import express from 'express'
const app=express()
app.listen(8080,()=>console.log("Server is running at http://localhost:8080"))
const userRouter=express.Router()
const productRouter=express.Router()
userRouter.get("/",(req,res)=>{
    res.send("Hello world from user router")
})
userRouter.post("/",(req,res)=>{
    res.send("This is post request")
})

productRouter.get("/",(req,res)=>{
    res.send("Hello world from product router")
})
productRouter.post("/",(req,res)=>{
    res.send("This is post request")
})
app.use("/api/users",userRouter)
app.use("/api/products",productRouter)