import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello akash</h1>");
});

app.listen(3333, () => {
    console.log("prg1 is running at 3333");
});