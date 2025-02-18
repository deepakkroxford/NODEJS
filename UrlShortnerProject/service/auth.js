// const sessionId  = new Map();
const jwt = require("jsonwebtoken");
const secrete = "amansingh123"

function setUser(user)
{
    
    // this we are using when we are authincate using the session so in function we take the id, and user
    // sessionId.set(id,user);

    // now we are using the jwt token for authentication before we are using the session id to authenticate the user
    return jwt.sign({
        _id:user._id,
        email:user.email,
    },secrete);
}

function getUser(token)
{
    // return sessionId.get(id);
    if(!token) return null;

    return jwt.verify(token,secrete);
}

module.exports ={
    setUser,
    getUser
}