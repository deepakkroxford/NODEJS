const express = require('express');
const {userCreation,readUser,deleteUser,editUser, updateUser} = require('../controllers/user');

const router = express.Router();

router.post('/create',userCreation);
router.get('/read',readUser);
router.get('/delete/:id',deleteUser);
router.get('/edit/:id',editUser);
router.post('/update/:id',updateUser);
module.exports = router;