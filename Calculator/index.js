const http = require('http');
const { sumrequesthandler } = require('./sum')
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    res.setHeader('Content-Type', 'text/html');

    if (req.url == '/' && req.method === 'GET') {
        res.write(`<h1>Welcome to the calculator page.</h1>
            <a href='/calculator'> go to calculator</a>
            `);

        res.end();
    }
    else if (req.url.toLocaleLowerCase() === '/calculator' && req.method === 'GET') {

        // in this we have to show the two input fields and the sum button when user click the sum 
        // button then it move to /calculatorpage

        res.write(`<form action="/result" method="POST">
            <input type="number" name="num1" placeholder="Enter first number">
            <input type="number" name="num2" placeholder="Enter second number">
            <input type="submit" value="Sum">

            <a href='/'> Go Home </a>
        </form>`);
        res.end();
    }
    else if (req.url.toLocaleLowerCase() == '/result' && req.method === 'POST') {
        return sumrequesthandler(req, res);

    }
    else {
        // Handle 404
        res.statusCode = 404;
        res.write(`<h1>404 Not Found</h1>`);
        res.end();

    }

    res.end();
})

server.listen(8001, () => {
    console.log("server started on http://localhost:8001");
});


