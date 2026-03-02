//Accept two numbers through command line argument and printing the sum
import express from 'express';
const app = express();
const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[3]);
const sum = num1 + num2;
app.listen(8080, () => {
    console.log(`Sum of ${num1} and ${num2} is ${sum}`);
});
app.get("/", (req, res) => {
    res.send(`Sum of ${num1} and ${num2} is ${sum}`);
});