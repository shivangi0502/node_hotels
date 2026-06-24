const jwt = require('jsonwebtoken');
const { split } = require('lodash');



const jwtAuthMiddleware = (req,res,next) => {
    //first chech the request headers has authorization or not
    const authorization = req.headers.authorization;
    if(!authorization) return res.status(401).json({error: "token not found"});
    //extract the jwt tokens from the request header
    const token = req.headers.authorization.split(' ')[1];
    if(!token) return res.status(401).json({error: 'unauthorized'});
    try{
        //verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        //attach the user information to the request object
        req.user = decoded;
        next();
    }catch(err){
        console.log(err);
        res.status(401).json({error: 'invalid token'});
    }
}

//function to generate the token
const generateToken = (userData)=>{
    //generate a new token using the user data
    const secret = process.env.JWT_SECRET || 'fallback_secret_for_testing';
    const payload = userData.toObject ? userData.toObject() : userData;
    return jwt.sign(payload, secret, { expiresIn: '1h' });
}

module.exports = {jwtAuthMiddleware, generateToken};
