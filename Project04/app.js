const express = require('express');
const app = express();
const path = require('path');
const userRouter = require('./routes/user')

// middlewares
app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use('/user',userRouter);

app.get('/',(req,res)=>{
    res.render('index');
})



app.listen(3000,()=>{
    console.log(`Server started at http://localhost:3000`);
})