const http = require('http');

const server = http.createServer((req,res)=>{
 const url = req.url;
 if(url ==='/'){
    res.end("Home page ")
 }else if(url ==='/about'){
    res.end("we are in the about page");
 }else {
    res.end("invalid page error 404")
 }
})

const port = 3000;
server.listen(port,()=>{
    console.log(`the server is running http://localhost:${port}`);
})