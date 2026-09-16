import http from 'http'

const server =http.createServer((req,res)=>{

    //req method ->GET,POST,PUT,DELETE,PATCH
    console.log('Method:',req.method);
    console.log("URL:",req.url);

    //browser can send only get request to the server
    //POST PATCH,DELETE ->Can be check by api tester
    //API Tester:-postman,echo api,thunder client

});