import jwt from 'jsonwebtoken'
import expressAsyncHandler from 'express-async-handler'
import User from '../model/userModel.js'


// this has to be protect the routes  
// you have to be loggedIn to access the routes

const protect = expressAsyncHandler(async (req ,res ,next)=>
{
    let token;

    token = req.cookies.jwt;

    if(token)
    {
     try{
          const decoded = jwt.verify(token , process.env.JWT_SECRET)   // decoded should have user Id 

          req.user = await User.findById(decoded.userId).select('-password')

          next()
     }
     catch(error)
     {
        res.status(401);
        throw new Error ('Invalid token')
     }
    }
    else
    {
        res.status(401);
        throw new Error('No authorized token');
    }

})

export {protect};