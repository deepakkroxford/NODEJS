const express = require('express')
const router = express.Router();
const URL = require('../models/shortUrl');
router.get('/', async (req, res) => {
  
        if(!req.user) return res.redirect('/login');
        const datas = await URL.find({createdBy: req.user._id});
        return res.render('home', { urls: datas });
   
});

router.get('/signup',(req,res)=>{
    return res.render('signup');
})

router.get('/login',(req,res)=>{
    return res.render('Log');
})
module.exports = router;