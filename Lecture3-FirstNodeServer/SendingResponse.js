const http = require('http');


/*
In this we are understanding how to send the response 
in the html and how to set the req so if user hit/product it move in to the product section 

Basic understanding of how these thing works 
*/
function understandingResponse(req, res) {
    res.statusCode = 200; // Correct way to set the status code
    if(req.url==='/'){
        res.write('<html>');
        res.write('<body><h1>This is the home page !</h1></body>');
        res.write('<html>');

    }else if (req.url==='/products'){
        res.setHeader('Content-Type', 'text/html'); // Set the content type header
        res.write('<html>');
        res.write('<head><title>My first page</title></head>');
        res.write('<body><h1>Do well, keep it up! and this is the product page</h1></body>');
        res.write('</html>');
        res.end();
    }
   
}
const port = 3004;
const server = http.createServer(understandingResponse);

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
