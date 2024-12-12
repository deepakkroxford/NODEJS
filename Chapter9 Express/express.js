// In this file, we will learn how to build the server using only Express
// No need to write require http and all

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Hello, World!");
});

app.get('/about', (req, res) => {
    res.send("I am on the about page!"+"my name is ", req.query.name +"age is ", req.query.age);
});

app.get('/contact', (req, res) => {
    res.send("I am on the contact page!");
});

const port = process.env.PORT || 3000; // Corrected to use uppercase PORT (standard practice)
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`); // Dynamically display the correct port
});
