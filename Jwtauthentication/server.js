const express = require('express');
const path = require('path');
const app = express();
const userRoutes = require('./routes/user');
const staticRoutes = require('./routes/staticRoute');
const {connectDb} = require('./connection');

connectDb().then(()=>{
    console.log('Connected to MongoDB');
});


// this we are using so we can easily use our ejs libray in the node js
app.set('view engine','ejs');
app.set('views',path.resolve("./views"))

// middleware to parse incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/user",userRoutes);
app.use('/',staticRoutes);

app.get('/', (req, res) => {
    res.send('Hello from Express Server');
})

app.listen(8000,()=>{
    console.log('Server is running on port http://localhost:8000');
})