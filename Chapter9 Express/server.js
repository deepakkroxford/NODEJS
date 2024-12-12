const http= require('http');

const express = require('express');

const app = express();

app.get('/',(req,res)=>{
   return  res.send("hello world")
})

app.get('/about',(req,res)=>{
   return  res.send("I am on about page ")
}) 

app.get('/contact',(req,res)=>{
    return  res.send("I am on contact page "+"hey"+req.query.name +"your are "+req.query.age
        
    )
})

const server = http.createServer(app);
server.listen(8000,()=>{
    console.log('server running on port http://localhost:8000')
})