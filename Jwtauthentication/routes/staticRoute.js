const express = require('express');
const USER = require('../model/user');
const router = express.Router();


router.get('/', async (req, res) => {
  
    // if(!req.user) return res.redirect('/login');
    const userdata = await USER.find({});
    console.log(userdata);
     res.render('home', { urls: userdata });

});
router.get('/signup',(req,res)=>{
    return res.render('signup');
})

router.get('/login',(req,res)=>{
    return res.render('login');
})

module.exports = router;