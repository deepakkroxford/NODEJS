const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/ejsProject")

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    url:{
        type:String,
        required:true,
    }
})


const user = mongoose.model('user',userSchema);

module.exports=user;