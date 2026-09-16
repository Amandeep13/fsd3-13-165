import http from "http";

const server =http.createServer((req,res) =>{
if(req.url==="/" &&req.method==="GET") {
    res.statusCode=200;
    res.end("Get Request");

}
else if(req.url==="/" && req.method ==="POST"){
   // console.log("Request:",req)
   let body=" ";
   req.on("data",(chunk)=>{
    body+=chunk;
   });
   req.on("end",()=>{
    const product=JSON.parse(body);
    console.log("receive product:",product);
        res.statusCode=201;

    res.end(JSON.stringigy({msg:"product added",product}));

   });
    

}
else if (req.url==="/n" && req.method=="POST"){
res.statusCode=200;
    res.end("POST Request");
}

else if (req.url==="/n" && req.method=="PUT"){
res.statusCode=200;
    res.end("PUT Request");
}
else if (req.url==="/n" && req.method=="DELETE"){
res.statusCode=200;
    res.end("DELETE Request");
}
});

server.listen(4444,() =>{
    console.log("Prg6 is rinning...");
});