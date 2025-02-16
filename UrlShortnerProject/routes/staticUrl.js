const express = require('express')
const router = express.Router();
const URL = require('../models/shortUrl');
router.get('/',async(req,res)=>{
    const datas = await URL.find({});
    console.log("this is the lenght of data in the database",datas.length)
    return res.render('home',
        {
        urls:datas,
       })

})

module.exports = router;