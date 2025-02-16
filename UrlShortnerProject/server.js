const express = require('express');
const app = express();
const {connectDb} = require('./connection');
const urlRouter = require('./routes/url');
const URL = require('./models/shortUrl');
const path = require('path');
const staticUrl = require('./routes/staticUrl');
connectDb().then(()=>{
    console.log('Connected to MongoDB');
});



app.use(express.json());
app.use(express.urlencoded({ extended: false })); // to parse the form data
app.set('view engine','ejs');
app.set('views',path.resolve("./views"))


app.use("/url",urlRouter);
app.use('/',staticUrl);

app.get('/data', async (req, res) => {
    try {
        const getdata = await URL.find({});
        console.log("the data",getdata);
        // const htmlContent = `
        //     <h1>Data List</h1>
        //     <ul>
        //         ${getdata.map((data, index) => `<li>${index + 1}. ${data.shortId} - ${data.redirectUrl} - ${data.totalClicks}</li>`).join('')}
        //     </ul>
        // `;
        // res.status(200).send(htmlContent);
        res.render('data',
            {
                datas:getdata
            }
        )
    } catch (err) {
        console.log(err);
        res.status(500).send("<h1>Error getting data</h1>");
    }
});


app.listen(9000,()=>{
    console.log('Server is running on port http://localhost:9000');
})