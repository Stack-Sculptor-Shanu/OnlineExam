const express=require("express")
const users = require('../models/user_model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

const userRoute=express.Router()
const saltrounds = 10

//!Get the user details
userRoute.get('/users', async(req, res) => {
    try {
        const result = await users.find({},{password:0});
        res.status(200).json({message: "All users", result});
    } catch (error) {
        res.status(500).json({message: "Internal server error", error: error});
    }
});
//!Creating a user
userRoute.post('/create', async (req, res) => {
    const { name, email, mobilenumber, course, role, password } = req.body;
  
    try {
        const existingUser = await users.findOne({ email });
        if (existingUser) {
            return res.status(200).json({ message: 'User already exists',existingUser });
        }
        console.log(existingUser)
        let generatedPassword = password;
        if (!generatedPassword) {
            const firstName = name ? name.split(' ')[0] : 'DefaultName'; 
            const lastThreeDigits = mobilenumber.slice(-3); 
            generatedPassword = `${firstName}@${lastThreeDigits}`;
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(generatedPassword, saltrounds);
        const userData = {
            name,
            email,
            mobilenumber,
            course,
            role,  
            password: hashedPassword,
            timestamps: new Date(),
        };
        const result = await users.insertOne(userData);
        res.status(200).json({ message: 'User details saved successfully', result });
        
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});


//!Logging in
userRoute.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log(email)
    try {
        const currUser = await users.findOne({ email: email });
        if (!currUser) {
            return res.status(404).json({ message: 'User not Found' });
        } else {
            console.log('Password from frontend:', password);
            console.log('Stored hashed password:', currUser);

              bcrypt.compare(password, currUser.password, (err, result) => {
                if (err) {
                    return res.status(200).json({ message: 'Error comparing password' });
                }

                const token = jwt.sign(
                    { 
                        userId: currUser._id, 
                        name: currUser.name, 
                        role: currUser.role 
                    },
                    process.env.jwt_secret_key, 
                    { expiresIn: '3hr' }
                );
                res.status(200).json({
                    message: 'Logged in Successfully',
                    token: token,
                    role: currUser.role
                });
            });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error });
    }
});



module.exports=userRoute