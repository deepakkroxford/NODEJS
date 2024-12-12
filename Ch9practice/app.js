const express = require('express')

const app = express();

app.get('/', (req, res,next) => {
    console.log('this is the first midddleware')
    next();
});

app.get('/', (req, res,next) => {
    console.log('this is the first dummy midddleware',req.url,req.method)
    next();
});

app.get('/', (req, res,next) => {
    console.log('this is the second dummy midddleware',req.url,req.method)
    next();
});

// app.get('/', (req, res,next) => {
//     console.log('this is the second dummy midddleware',req.url,req.method)
//     res.send(`<h1>i am the third middleware that sending the request 
//         now i start learning about the middle ware  </h1>`);
// });

app.get('/', (req, res) => {
    console.log('handling / for get ',req.url,req.method)
    res.send(`<h1>i am the first middleware and also the homepage that sending the request`)
});

app.get('/contact-us', (req, res) => {
    console.log('handling /contact us for get ',req.url,req.method)
    res.send(`<h1>Submit your detail here in the cotact page
        <form action="/contact-us" method="POST">
            <input type="text" name="name" placeholder="Enter your name"><br>
            <input type="email" name="email" placeholder="Enter your email"><br>
            <textarea name="message" placeholder="Enter your message"></textarea><br>
            <input type="submit" value="Submit">
        </form>
        `)
});

app.post('/contact-us',(req,res)=>{
    console.log('handling /contact us for post ',req.url,req.method)
    console.log('Received Data',req.body)
    res.send(`<h1>Thank you for submitting your detail, we will get back to you shortly.</h1>`)
})

app.listen(3000,()=>{

    console.log('Server is running on http://localhost:3000')
})