import userRouter from "./routes/userRouter.js"
import productRouter from "./routes/productRouter.js"
import express from 'express'
const app=express()
app.listen(8080,()=>console.log("Server is running at http://localhost:8080"))
app.use("/api/users",userRouter)
app.use("/api/products",productRouter)
