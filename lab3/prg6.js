import http from "http";

const server =http.createServer((req,res) =>{
if(req.url==="/" &&req.method==="GET") {
    res.statusCode=200;
    res.end("Get Request");

}else if (req.url==="/n" && req.method=="POST"){
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