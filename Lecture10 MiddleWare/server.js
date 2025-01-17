
const express = require('express');
const app = express();


app.use((req,res,next)=>{
    console.log('This is a middleware function');
    next();
//    return res.json({success:true,messege:'the middleware is working fine'});
})
app.get('/', (req, res) => {
    res.send("Hello, World! form the home");
})


const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server is running on port ${port}`));
