const Student = require('../models/student')

async function getAllStudent(req,res){
    const allstudent = await Student.find({});
    res.json(allstudent);
}

async function getStudentById (req,res){
    const {id} =req.params;
    const student = await Student.findById(id);
    if(student){
        res.json(student);
    }
    else{
        res.status(404).json({ message: 'Student not found' });
    }
}

async function createStudent(req,res){
    const body = req.body;

    // this is use to validate the student if any field is missing we will return false
    if(!body.first_name || !body.last_name ||!body.age ||!body.gender || !body.email || !body.branch || !body.address){
        res.status(400).json({ message: 'Please provide all the required fields' });
    }

    const newStudent = await Student.create({
        first_name: body.first_name,
        last_name: body.last_name,
        age: body.age,
        gender: body.gender,
        email: body.email,
        branch: body.branch,
        address: body.address
    })
    console.log ("new student crated",newStudent)
    res.status(201).json({ message: 'Student created successfully', newStudent });
}

async function deleteStudentById(req,res){
    const {id} =req.params;
    const student = await Student.findByIdAndDelete(id);
    if(!student){
        res.status(404).json({ message: 'Student not found' });
    }
    else{
        res.json({ message: 'Student deleted successfully', deletedStudent: student });
    }
}

async function updateStudentById(req,res){
    const {id} = req.params;
    const body = req.body;

    // this is use to validate the student if any field is missing we will return false
    if(!body.first_name ||!body.last_name ||!body.age ||!body.gender ||!body.email ||!body.branch ||!body.address){
        res.status(400).json({ message: 'Please provide all the required fields' });
    }

    const updatedStudent = await Student.findByIdAndUpdate(id, body, {new: true});
    if(!updatedStudent){
        res.status(404).json({ message: 'Student not found' });
    }
    else{
        res.json({ message: 'Student updated successfully', updatedStudent });
    }
}

module.exports = {
    getAllStudent,
    getStudentById,
    createStudent,
    deleteStudentById,
    updateStudentById,
}