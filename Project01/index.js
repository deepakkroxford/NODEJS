const express = require('express');
const app = express();
const { connectionMongodb } = require('./connection');

// Import routes from the user router
const userRouter = require('./routes/user');

// Connect to MongoDB
connectionMongodb('mongodb://127.0.0.1:27017/youtube-app1').then(() => {
    console.log('Connected to MongoDB');
});


// Middleware to parse incoming requests
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded

// Use the userRouter for the '/user' path
app.use('/user', userRouter);

// Create the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
