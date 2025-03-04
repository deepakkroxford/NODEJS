const shortid = require('shortid')
const URL = require('../models/shortUrl')


const handleGenerateShortUrl = async (req, res) => {
    const body = req.body;
    console.log("the body url is ",body.url);
    if(!body.url){
        return res.status(400).json({message: 'Please provide a URL'})
    }
   const shortID = shortid.generate();
   await URL.create({
         shortId: shortID,
         redirectUrl:body.url,
         totalClicks:[],
         createdBy:req.user._id,
   });
   console.log("this is the short id i generate ",shortID)
//    return res.json({id:shortID}) before we are returning the json object but now we are returning the html
   return res.render('home',{
    id:shortID,
   })
   
}


const getByUrl = async(req,res)=>{
    
    const shortId = req.params.shortId;
    const url = await URL.findOneAndUpdate({
        shortId:shortId
    },
    {
        $push:{
            totalClicks:{
                timestamp:Date.now() }
        },
    
    })

    res.redirect('home')
}

const handleGetAnalytcs = async(req,res)=>{
    const shortId = req.params.shortId;
    const url = await URL.findOne({shortId});
    res.json({totalClicks:url.totalClicks.length,analytics:url.totalClicks});
}


module.exports = {handleGenerateShortUrl, getByUrl,handleGetAnalytcs};