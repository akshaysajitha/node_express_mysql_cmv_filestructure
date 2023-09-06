const jwt = require('jsonwebtoken');

// const Item = require("../models/item");
const user=require("../models/user")

exports.createuser=(req,res)=>{
    const userdetial =req.body;
    
    user.sign(userdetial,(err,result)=>{
        if(err){
            res.status(500).json({
                error:"error "
            })
            return;
        }
        
        res.status(200).json({
            message:"use data add successfully"
        })
    })

};

exports.loginuser=(req,res)=>{
    const loginvalue=req.body;
    user.loginuser(loginvalue,(err,result)=>{
        if(err){
            res.status(500).json({
                error:"error user"
            })
            return;
        }
        else if(!err && result.length>0){
            const user = result[0]
            const token =jwt.sign({name:user.name},'keysecretdemo',{expiresIn:'1h'})

            res.status(200).json({
                message:"login complete",
                token:token
            })
        }

        
    })
}

