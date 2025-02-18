const USER = require('../models/user');
// const { v4: uuidv4 } = require('uuid');
const {setUser,getUser} = require('../service/auth');

const handleUserCreation = async(req,res)=>{
  const {username,email,password}= req.body;
  try{
    const existingUser = await USER.findOne({email});
    if(existingUser){
      return res.status(400).json({message: 'Email already exists'});
    }
    else{
         // this line will create a new user if it doesn't exist in the system 
      const user = await USER.create({username,email,password});
      res.redirect('/');
    }
  }
  catch(error){
    console.error(error);
    res.status(500).json({message: 'Server error'});
  }
 
}


const handleUserLogin = async(req,res)=>{
    const {email,password} =req.body;
    try{
        const user = await USER.findOne({email,password});
        if(!user){
            return res.redirect('/login?error=Invalid+username+or+password',{
                error:"Invalid username or password"
            });
        }

        const token = setUser(user);
        res.cookie('uid',token);
        console.log("this is my token that i will genrate after the complete succesful user login",token);
        return res.redirect('/');
    }
    catch(error){
        console.error(error);
        res.status(500).json({message: 'Server error'});
    }   
    
}


module.exports = {handleUserCreation,handleUserLogin};