const express = require('express');
const app = express();
const {connectDb} = require('./connection')
const studentRouter = require('./routes/student');

connectDb();


const port = 4000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
})

// Middleware to parse incoming requests
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: false }));

app.use('/student',studentRouter)


app.listen(port,()=>{
    console.log(`Server is running on port  http://localhost:${port}`);
});