import express from 'express'
const app=express()

// const greet=(req,res,next)=>{
//     console.log("Hello world")
//     next()
// };
app.use(greet);
app.use(express.json())
app.listen(8080,()=>{
    console.log("Server is running at http://localhost:8080")
})
app.get("/",(req,res)=>{
    res.send(users);
})
const users=[
    {
        id:1,
        name:"John",
        email:"john@gmail.com",
        role:"student"
    },
     {
        id:2,
        name:"Cathy",
        email:"cathy@gmail.com",
        role:"student"
    },
     {
        id:3,
        name:"Admin",
        email:"admin@gmail.com",
        role:"admin"
    }
]
app.get("/:id",(req,res)=>{
    const user=users.find((user)=>user.id===Number(req.params.id))
    if(user)
    res.send(user)
})
app.post("/",(req,res)=>{
    const user=req.body;
    users.push(user)
    res.json(users)
})
// app.delete("/:id",(req,res)=>{
//     const id=Number(req.params.id)
//     const index=users.findIndex((user)=>user.id===id)
//     if(index>-1){
//         users.splice(index,1)
//         res.json(users)
//     }
//     else{
//         res.status(404).send("User not found")
//     }
// })

app.delete("/:id",(req,res)=>{
    users=users.filter((user)=>user.id!== Number(req.params.id));
    res.json(users)
})