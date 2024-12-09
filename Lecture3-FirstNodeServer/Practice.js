const http = require('http');

const server = http.createServer((req, res) => {
    console.log(`URL: ${req.url}, Method: ${req.method}`);

    // Setting the Content-Type header for proper rendering
    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/home') {
        res.write('<h1>This is the home page</h1>');
        return res.end();
    } else if (req.url === '/men') {
        res.write('<h1>This is the men page</h1>');
        return res.end();
    } else if (req.url === '/women') {
        res.write('<h1>This is the women page</h1>');
        return res.end();
    } else if (req.url === '/kids') {
        res.write('<h1>This is the kids page</h1>');
        return res.end();
    } else if (req.url === '/electronics') {
        res.write('<h1>This is the electronics page</h1>');
        return res.end();
    } else if (req.url === '/books') {
        res.write('<h1>This is the books page</h1>');
        return res.end();
    } else if (req.url === '/fashion') {
        res.write('<h1>This is the fashion page</h1>');
        return res.end();
    }

    res.write(`
    <html lang="en">
    <head>
        <title>Myntra</title>
    </head>
    <body>
        <nav>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/men">Men</a></li>
                <li><a href="/women">Women</a></li>
                <li><a href="/kids">Kids</a></li>
                <li><a href="/electronics">Electronics</a></li>
                <li><a href="/books">Books</a></li>
                <li><a href="/fashion">Fashion</a></li>
                <li><a href="/sports">Sports</a></li>
            </ul>
        </nav>
    </body>
    </html>
    `);
    res.end();
});

server.listen(3001, () => {
    console.log('Server is running at http://localhost:3001');
});




// const http = require('http');

// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method);
//   if (req.url === '/home') {
//     res.write('<h1>Welcome to Home</h1>');
//     return res.end();
//   } else if (req.url === '/men') {
//     res.write('<h1>Welcome to Men</h1>');
//     return res.end();
//   } else if (req.url === '/women') {
//     res.write('<h1>Welcome to Women</h1>');
//     return res.end();
//   } else if (req.url === '/kids') {
//     res.write('<h1>Welcome to Kids</h1>');
//     return res.end();
//   } else if (req.url === '/cart') {
//     res.write('<h1>Welcome to Cart</h1>');
//     return res.end();
//   }


//   res.write(`
// <html lang="en">
// <head>
//   <title>Myntra</title>
// </head>
// <body>
//   <head>
//     <nav>
//       <ul>
//         <li><a href="/home">Home</a></li>
//         <li><a href="/men">Men</a></li>
//         <li><a href="/women">Women</a></li>
//         <li><a href="/kids">Kids</a></li>
//         <li><a href="/cart">Cart</a></li>
//       </ul>
//     </nav>
//   </head>
// </body>
// </html>
//   `);
//   res.end();
// });

// server.listen(3001, () => {
//   console.log('Server running on address http://localhost:3001');
// });
