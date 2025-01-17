const express = require('express');
const {getAllStudent,getStudentById,deleteStudentById,createStudent,updateStudentById} = require ('../controllers/student')
const router = express.Router();

// Routes for hosts


router.get('/', getAllStudent);

router.get('/:id', getStudentById);

router.post('/', createStudent);

router.delete('/:id', deleteStudentById);

router.patch('/:id', updateStudentById);

module.exports = router;

