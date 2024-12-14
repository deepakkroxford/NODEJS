const express = require('express');

const userRouter = require('./routes/userRouter')
const hostRouter = require('./routes/hostRouter')
const app = express();

// Middleware to log requests
app.use(function (req, res, next) {
    console.log(req.url, req.method);
    next();
});

// Route for the homepage

//moving to routes
// app.get('/', (req, res, next) => {
//     res.send(`
//         <h1>Welcome to Airbnb!</h1>
//         <a href="/add-home">Add home</a>
//     `);
// });

app.use(express.urlencoded({ extended: true }));
app.use(userRouter)
app.use(hostRouter);

// Route to display the form to add a home

// moving to routes
// app.get('/host/add-home', (req, res, next) => {
//     res.send(`
//         <h1>Register your home here:</h1>
//         <form action="/add-home" method="POST">
//             <input type="text" name="title" placeholder="Title of your home"><br>
//             <input type="text" name="description" placeholder="Description of your home"><br>
//             <input type="text" name="price" placeholder="Price per night"><br>
//             <input type="text" name="location" placeholder="Location of your home"><br>
//             <input type="submit" value="Submit">
//         </form>
//     `);
// });


 
// Middleware to parse form data  // this will give the data in the key value pairs



// Route to handle form submission

//moving the routes file

// app.post('/host/add-home', (req, res, next) => {
//     console.log(req.body);
//     res.send(`
//         <h1>Registration Successful</h1>
//         <a href="/">Go to Homepage</a>
//     `);
// });



app.use((req, res, next) => {
    res.status(404).send('Page not found');
})

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log('Press Ctrl+C to stop the server');
});



/*

After moving to the routes file complexity will decrese and we can manage to do this work 
by divinding in to the simple module
*/