const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();



const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn : '1h'})
}


// Register Route 


router.post('/register', async(req, res) => {
    const {name, email, password} = req.body;

    try {
        const userExists = await User.findOne({email});
        if (userExists) return res.status(400).json({message: 'User Already Exists'});



        const user = await User.create({name, email, password});
        res.json({token: generateToken(user._id)});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
})


// Login Route 


router.post('/login', async  (req, res) => {
       const {name, email, password} = req.body;

       try {
        const user = await User.findOne({email});
        if (!user || !(await user.matchPassword(password))) {
            return res.status(401).json({message : 'Invalid Credential'});
        }
        res.json({token : generateToken(user._id)})
       } catch (err) {
        res.status(500).json({error: err.message})
       }
})