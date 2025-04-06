const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
// using the middleware globaly for each request and response so the first middleware help to parese the json and 
// the second middleware parse the formdata 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// so this line used to read the static file like the images, css , html
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    // res.send('hi the server is running');
    fs.readdir(`./files`, function (err, files) {
        //console.log(files);
        res.render('index', { files: files });
    })

})


app.post('/create', (req, res) => {
    // res.send('hi the server is running');
    fs.writeFile(`./files/${req.body.title.split(' ').join(' ')}`, req.body.data, function (err) {
        res.redirect('/');
    })

})


app.get('/file/:filename',(req,res)=>{
    fs.readFile(`./files/${req.params.filename}`,'utf-8',(error,filedata)=>{
        if(error){
            console.log(error);
        }
        console.log(filedata)
        console.log(req.params.filename)
        res.render('show',{filename:req.params.filename,filedata:filedata});
    })
})

app.get('/edit/:filename',(req,res)=>{
   res.render('edit',{previousname:req.params.filename});
})

app.post('/edit',(req,res)=>{
    console.log(req.body);
    fs.rename(`./files/${req.body.previous}`, `./files/${req.body.newname}`, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error renaming file');
        }
        res.redirect('/');
    })
})

app.listen(4000, () => {
    console.log(`the server is running http://localhost:4000`);
})