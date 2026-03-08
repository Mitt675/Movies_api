const jwt = require('jsonwebtoken')

exports.authMiddleware = (req,res,next) =>{
 try{
  const authHeader = req.headers.authorization 
 
 if(!authHeader){
  return res.status(401).json('token is not provided')
 }

 const token = authHeader.split(' ')[1]

 const decoded = jwt.verify(token , process.env.JWT_SECRET)

 req.userId = decoded.userId

 next()
 
 }
 catch(err){
  return res.status(500).json({message : err.message})
 }

}