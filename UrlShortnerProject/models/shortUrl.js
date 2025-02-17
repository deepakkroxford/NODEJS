const mongoose = require('mongoose');
 

const ShortUrlSchema = new mongoose.Schema({
    shortId :{
        type: String,
        required: true,
        unique:true,
    },
    redirectUrl:{
        type: String,
        required: true,
    },
    totalClicks: [{timestamp:{type:Number}}],
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
    },
},{timestamps:true});


const URL = mongoose.model("url",ShortUrlSchema);

module.exports = URL;