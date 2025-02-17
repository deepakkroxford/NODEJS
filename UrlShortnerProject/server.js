const express = require('express');
const app = express();
const {connectDb} = require('./connection');
const urlRouter = require('./routes/url');
const URL = require('./models/shortUrl');
const path = require('path');
const staticUrl = require('./routes/staticUrl');
const UserRoute = require('./routes/user');
const cookieParser = require('cookie-parser');
const {restrictToLoginUser,checkAuth} =require('./middleware/auth');
connectDb().then(()=>{
    console.log('Connected to MongoDB');
});


console.log(cookieParser)
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // to parse the form data
app.use(cookieParser()); // to parse the cookie data


app.set('view engine','ejs');
app.set('views',path.resolve("./views"))


app.use("/url",restrictToLoginUser,urlRouter);
app.use('/',checkAuth,staticUrl);
app.use("/user",UserRoute);


app.listen(9000,()=>{
    console.log('Server is running on port http://localhost:9000');
})