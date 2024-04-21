const prisma= require("../prisma/index.js");
const cookieToken = require("../utils/cookieToken.js");

exports.singup= async(req,res)=>{
 try{
 const {name,email,password}=req.body;
 if(!name|| !email|| !password){
    return res.json(405).status("plz provide password");}
    const user = await prisma.user.create({
        data: {
          name,
          email,
          password
        },
      })
      cookieToken(user,res)
 }
 
 catch(err){

 }
}