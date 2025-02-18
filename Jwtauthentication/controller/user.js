const USER = require('../model/user');

const handleUserCreation = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({message: 'require field is missing fill it correctly'});
    }
    try {
        const existingUser = await USER.findOne({email});
        if (existingUser) {
            return res.status(400).json({ message: 'USER  already exists' });
        }
        else {
         const createdUser =await USER.create({ name, email, password });
         await createdUser.save();
        //  res.json({ message: 'User created successfully', createdUser });
         res.render('login');
        }
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
}

const handleUserLogin = async (req,res)=>{
    const {email,password}  =req.body;
    const user = await USER.findOne({email,password});
    if(!user){
        return res.status(404).json({ message: 'User not found' });
    }
    // res.json({ message: 'User logged in successfully', user });
    res.redirect('/');
}

module.exports = { handleUserCreation,handleUserLogin };