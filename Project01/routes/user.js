const express = require('express');

const {getAllUser,getUserById,deleteUserId,updateUserId, createUser} = require('../controller/user')

const router = express.Router();


// Routes for users
router.get('/', getAllUser);

router.get('/:id', getUserById);

router.post('/', createUser);

router.patch('/:id', updateUserId);

router.delete('/:id', deleteUserId);

module.exports = router;
