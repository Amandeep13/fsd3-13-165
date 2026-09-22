import http from 'http'
import { getAllproducts } from './products.js';

const server =http.createServer((req,res) => {
      if (req.url === "/api/v1/products" && req.method === 'GET') {
        res.statusCode = 200;
        const data =getAllProducts();
        res.setHeader('content-type','application/json');
        res.end(
          JSOn.stringify ({
            count:data.length,
            data,
          })

        );
      } else if (req.url === "/api/v1/products" && req.method === "POST") {
        // console.log("Request",req);
        let body=''
        req.on('data',(chunk)=>{
          body+=chunk
        });
        req.on("end",()=> {
          const product=JSON.parse(body);
          console.log("received product:",product);
           res.statusCode = 200;
        // res.end("POST Request");
            res.end(JSON.stringify({msg:'product added',product}));
        });
        
       
      } 
      else if (req.url.startsWith( "/products/1") && req.method === "PUT") {
       const productId = req.url.split("/").pop()
        let body=''
        req.on('data',(chunk)=>{
          body+=chunk
        });
        req.on("end",()=> {
          const product=JSON.parse(body);
          product.id = productId
          res.statusCode=200;
            res.end(JSON.stringify({msg:'product updated',product}));
        });
       

      } else if (req.url === "/" && req.method === "DELETE") {
        res.statusCode = 200;
        res.end("DELETE Request");
      } else {
        res.statusCode = 404;
        res.end("request not found");
      }
});
server.listen(4444,()=>console.log("prg6 is running"));