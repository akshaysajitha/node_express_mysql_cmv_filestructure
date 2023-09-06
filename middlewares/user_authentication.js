const jwt =require('jsonwebtoken');
const tokencheck = function varifytoken(req,res,next){
    const authHeader=req.headers.authorization

    if(authHeader==undefined){
        return res.status(511).json({
            message:'The client needs to authenticate to gain network access'
        })

    }const token =authHeader.split(" ")[1]
    jwt.verify(token,'keysecretdemo',(err,decode)=>{
        if(err){
            return res.status(401 ).json({
                message:'Unauthorized'
            })
        }else{
            next()
        }
    })
}

module.exports=tokencheck