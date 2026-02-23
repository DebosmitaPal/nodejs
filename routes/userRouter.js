import express from "express";

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("Hello world from user router");
});

userRouter.post("/", (req, res) => {
  res.send("This is post request");
});

export default userRouter;