const express = require('express');
const app = express();
const {connectDb} = require('./connection');
const urlRouter = require('./routes/url');

connectDb().then(()=>{
    console.log('Connected to MongoDB');
});

app.use(express.json());

app.get('/',(req,res)=>{
   res.send('Hello World your server is running on port 9000');
})

app.use("/url",urlRouter);

app.listen(9000,()=>{
    console.log('Server is running on port http://localhost:9000');
})