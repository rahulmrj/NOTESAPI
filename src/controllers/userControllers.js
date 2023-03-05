const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECERET_KEY = process.env.SECERET_KEY;


const signup = async(req, res)=>{
    //Existing user check
    //Hashed password
    //user creation 
    //Token generation
    
    const {username, email, password}= req.body;

    try{
        const existingUser = await userModel.findOne({email : email});
        if(existingUser){
            return res.status(400).json({message: "user already exist"});
        }
        
        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await userModel.create({
            email:email,
            password: hashedPassword,
            username: username
        });

        const token  = jwt.sign({email: result.email, id: result.id}, SECERET_KEY);

        res.status(201).json({result: result, tkoen: token});


    }catch (error){

        console.log(error);
        res.status(500).json({message: "someting went wrong"});

    }


}

const signin = async (req, res)=>{

    const {email, password} = req.body;

    try {
        const existingUser = await userModel.findOne({email : email});
        if(!existingUser){
            return res.status(404).json({message: "user not found"});
        }

        const matchPassword = await bcrypt.compare(password, existingUser.password);
        if(!matchPassword){
            return res.status(400).json({message:"invalid creadintial"});
        }

        const token  = jwt.sign({email: existingUser.email, id: existingUser.id}, SECERET_KEY);

        res.status(200).json({result: existingUser, tkoen: token});

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "someting went wrong"});
    }

}

module.exports = {signup, signin};
