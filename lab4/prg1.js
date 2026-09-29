import express from 'express';
const app = express();
// request goes here
app.get("/", (req, res) => {
    res.send("<h1>About us page</h1>")
});

const products = [
  { id: 1, name: "marker", qty: 100, price: 15 },
  { id: 2, name: "duster", qty: 50, price: 10 },
];


app.get("/products",(rq,req)=>{
    res.status(200).send(products);
});
app.use((rq,req)=>{
    res.status(404).send("<h1>page is not found</h1>");
});

// always listen at last
app.listen(3333, () => console.log("prg1 is running at 3333"));