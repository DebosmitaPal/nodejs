import express from "express";

const productRouter = express.Router();

productRouter.get("/", (req, res) => {
  res.send("Hello world from product router");
});

productRouter.post("/", (req, res) => {
  res.send("This is post request");
});

export default productRouter;