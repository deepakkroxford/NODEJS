const http = require('http');
function understandHttpObject(req,res){
    console.log(req.headers);
    console.log(req.url);
    console.log(req.method);
    process.exit();
}
const port = 3001
const server = http.createServer(understandHttpObject);
server.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
})
