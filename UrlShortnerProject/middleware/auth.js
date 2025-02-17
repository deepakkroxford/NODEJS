const { getUser } = require('../service/auth');

async function restrictToLoginUser(req, res, next) {
    const userUid = req.cookies?.uid; // Corrected from req.cookie to req.cookies
    if (!userUid) {
        return res.redirect('/login');
    }
    
    const user =  getUser(userUid); // Assuming getUser is an async function
    if (!user) {
        return res.redirect('/login');
    }

    req.user = user; // Attach user to the request object
    next();
}


async function checkAuth(req,res,next){

    const userUid = req.cookies?.uid; // Corrected from req.cookie to req.cookies

    
    const user =  getUser(userUid); // Assuming getUser is an async function
    

    req.user = user; // Attach user to the request object
    next();
}
module.exports = {restrictToLoginUser,checkAuth};
