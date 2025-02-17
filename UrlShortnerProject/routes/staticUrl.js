const express = require('express')
const router = express.Router();
const URL = require('../models/shortUrl');
router.get('/', async (req, res) => {
    try {
        if(!req.user) return res.redirect('/login');
        const datas = await URL.find({createdBy: req.user._id});
        return res.render('home', { urls: datas });
    } catch (error) {
        console.error("Error fetching URLs:", error);
        return res.status(500).send("Internal Server Error");
    }
});

router.get('/signup',(req,res)=>{
    return res.render('signup');
})

router.get('/login',(req,res)=>{
    return res.render('Log');
})
module.exports = router;