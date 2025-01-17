const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    first_name: {
        required: true,
        type: String
    },
    last_name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String,
        unique: true
    },
    branch: {
        required: true,
        type: String,
    },
    address: {
        required: true,
        type: String, // Fixed: Changed `string` to `String`
    },
    age: {
        required: true,
        type: Number,
        min: 18,
        max: 80
    },
    gender: {
        required: true,
        type: String,
    }
}, { timestamps: true });

// Creating the model
const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
