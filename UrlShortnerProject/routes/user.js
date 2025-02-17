const express= require('express');
const {handleUserCreation,handleUserLogin} = require('../controller/user');
const router = express.Router();


router.post('/',handleUserCreation);
router.post('/login',handleUserLogin);

module.exports =router;