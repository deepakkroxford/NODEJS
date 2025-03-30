const http = require('http');

function creatingServer(req, res) {
    res.write('hii how are u');
    res.end();
}

const port = 3000;
const server = http.createServer(creatingServer);
server.listen(3000,()=>{
    console.log(`the surever is running at http://localhost:${3000}`);
})