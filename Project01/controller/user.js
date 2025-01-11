const User = require('../models/User');

async function getAllUser(req, res)
{
    const allDbUsers = await User.find({}); 
    res.json(allDbUsers);
}

async function getUserById(req, res){
    const {id}= req.params; 
    const user = await User.findById(id); // Find user by ID
    if (user) {
        res.json(user); // Send the user as JSON if found
    } else {
        res.status(404).json({ message: "User not found" }); // Handle case where user is not found
    }
}

async function createUser(req,res)
{
    const body = req.body;
    console.log("Body", body);
    if (!body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
        res.status(404).json({ message: 'enter all the details' });
    }
   const result = await User.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        gender: body.gender,
        job_title: body.job_title
    })

    console.log('New user created:', result);
    res.status(201).json({ message: 'User created successfully'});
}

async function updateUserId(req, res){
    const body = req.body;
    const {id } = req.params;
    const user = await User.findByIdAndUpdate(id,{last_name: body.last_name})
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User updated successfully'});
}

async function deleteUserId(req, res){
    const {id} = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    else{
    res.json({ message: 'User deleted successfully', deletedUser:user });
    }
}

module.exports = {
    getAllUser,
    getUserById,
    createUser,
    updateUserId,
    deleteUserId,
}

