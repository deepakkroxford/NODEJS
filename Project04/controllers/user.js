
const userModel = require('../models/user')

const userCreation = async (req, res) => {

    const { name, email, url } = req.body;
    try {
        if (!name || !email || !url) {
            return res.json({ success: false, message: "field is missing" });
        }
        else {
            const userData = await userModel.create(
                {
                    name: name,
                    email: email,
                    url: url
                }
            )

            
            res.redirect('/user/read');
            res.json({success:true,userData});
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({success:false,message:"server error"})
    }
}

const readUser = async(req,res)=>{
    try{
        const data = await userModel.find({});
        res.render('read',{data});
    }
    catch(error) {

    }
}

const deleteUser = async(req,res) =>{
    const userId = req.params.id;
    try{
        const data = await userModel.findByIdAndDelete(userId);
        res.json({success:true,message:data});
    } catch(error) {
        console.log(error);
        res.json({success:false, message:'server error'})
    }

}

module.exports = {
    userCreation,readUser,deleteUser
};