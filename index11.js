import express from 'express'
const app=express();
app.listen(8080,()=>{
    console.log("Server is running at http://localhost:8080")
})
//app.use(express.static("images"))
// app.use("/images",express.static("images"))
app.use("/public",express.static("public"))