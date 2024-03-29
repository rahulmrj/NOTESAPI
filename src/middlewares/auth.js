const jwt = require("jsonwebtoken");
const SECERET_KEY = "##$%Afod";

const auth = (req, res, next)=>{
    try {

        let token = req.headers.authorization
        if(token){
            token = token.split(" ")[1];

            let user  = jwt.verify(token, SECERET_KEY);
            req.userId = user.id;


        }else{
           return res.status(401).json({message: "Unauthorized user"});
        }

        next(); 
        
    } catch (error) {
        console.log(error);
        res.status(401).json({message: "Unauthorized user"});

    }

}

module.exports = auth;