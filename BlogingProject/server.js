const express = require('express');
const path = require('path');
const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.set("view engine","ejs");
app.set('views',path.resolve("./views"));

app.get('/', (req, res) => {
    res.render('home');
})


app.listen(9000,()=>{
    console.log('Server is running on port http://localhost:9000');
})


