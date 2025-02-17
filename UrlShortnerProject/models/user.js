const  mongoose = require('mongoose');

const CreatingUserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
},{timestamps:true})

const USER = new mongoose.model('user',CreatingUserSchema);

module.exports = USER;