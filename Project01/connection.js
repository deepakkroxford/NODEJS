
const mongoose = require('mongoose');

async function connectionMongodb()
{
    return  await mongoose.connect('mongodb://127.0.0.1:27017/youtube-app1');
}
module.exports = {connectionMongodb}








// // Old way to connect to MongoDB
// mongoose.connect('mongodb://127.0.0.1:27017/youtube-app1').then(()=> console.log('connected to mongodb')).catch((error)=>{
//     console.error('Failed to connect to mongodb:', error);
// })