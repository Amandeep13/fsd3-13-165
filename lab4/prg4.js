import { products } from "./data.js";
import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send(`
        <h1>Home Page</h1>
        <a href="/api/products">Browse Products</a>
    `);
});


app.get("/api/products", (req, res) => {
    const modiproducts = products.map(
        ({ review, description, ...rest }) => rest
    );
    // Query string / request query must  be before req parameter or dynamic .url
    app.get("/api/products/query",(req,res)=>{
        const {serach ,limit }= req.query;
        console.log("search:",serach);
        console.log("limit:",limit);
        let sortedProducts=[...products]// copy all product
        if(mp){
            sortedProducts=sortedProducts.filter(
                (item)=>item.price<=Number(mp)
            )
        }
   if(search){
    sortedProducts=sortedProducts.filter((item)=>
        item.name.toLowerCase().startsWith(search),
);
   }
  if(limit){
    sortedProducts=sortedProducts.slice(0,Number(limit))
  }
  if(sortedProducts.length<1){
    res.sendStatus(200)
    .json({"data":[],msg:'No product matched your search criteria'});
  }else{
    res
   .sendStatus(200)
   .json({count:sortedProducts.length,data:sortedProducts});
  }




        res.send("product search")

    });

    res.status(200).json({
        count: modiproducts.length,
        data: modiproducts
    });
});

app.get("/api/products/:id", (req, res) => {
    const { id } = req.params;

    const p = products.find((item) => item.id === Number(id));

    if (p) {
        res.status(200).json({
            status: true,
            product: p
        });
    } else {
        res.status(404).json({
            status: false,
            msg: `Product not found with id: ${id}`
        });
         
    }
});

app.use((req, res) => {
    res.status(404).send("Page not found");
});

app.listen(3333, () => {
    console.log("prg4 is running.....");
});