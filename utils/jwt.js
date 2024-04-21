const jwt= require("jsonwebtoken");
const getWebToken=(userId)=>{
    return jwt.sign({userId:userId},process.env.secret,{expiresIn:'1 day'})
}
module.exports=getWebToken;