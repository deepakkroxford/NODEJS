const mongoose = require('mongoose')

 async function connectDb(){
    return await mongoose.connect('mongodb://127.0.0.1:27017/authentication')
}

module.exports ={connectDb};