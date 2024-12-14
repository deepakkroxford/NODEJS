const express = require('express');

const hostRouter = express.Router();

hostRouter.get('/host/add-home', (req, res, next) => {
    res.send(`
        <h1>Register your home here:</h1>
        <form action="/add-home" method="POST">
            <input type="text" name="title" placeholder="Title of your home"><br>
            <input type="text" name="description" placeholder="Description of your home"><br>
            <input type="text" name="price" placeholder="Price per night"><br>
            <input type="text" name="location" placeholder="Location of your home"><br>
            <input type="submit" value="Submit">
        </form>
    `);
});

hostRouter.post('/host/add-home', (req, res, next) => {
    console.log(req.body);
    res.send(`
        <h1>Registration Successful</h1>
        <a href="/">Go to Homepage</a>
    `);
});

module.exports=hostRouter;