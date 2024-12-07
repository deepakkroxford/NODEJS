const http = require('http');

// function requestListener(req, res) {
//     console.log(req.method, req.url); // Logs the request method and URL for better debugging
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello, World!'); // Sending a basic response to the client
// }

// const port = 3000; // Corrected variable name
// const server = http.createServer(requestListener);

// server.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });



/*
This is the way to create the first server where the function will take two thing 
the fist one is req and second one is the response.

When you create the server so you have to listen the req also 
so we use the server.listen method where we define the port number in which port number we want 
to run the server.

*/
function creatingFirstServer(req,res)
{
    console.log(req);
    
    //after serving the response the server will stop executing 
    process.exit();
}

const port = 4000;
const server= http.createServer(creatingFirstServer);


//this is the other way to listent the servers where it take the callback and and return value when server 
//start running..

server.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
})

// for closing the server we use control + close 
