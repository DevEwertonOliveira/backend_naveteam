const express = require("express")
const router = express.Router()
const User = require('../model/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require("dotenv").config();
const { registerValidation, loginValidation} = require('../validation')


// Sign up
router.post('/signup', async (req, res) =>{
    
    const { error } = registerValidation(req.body);
   if(error) return res.status(400).send(error.details[0].message);

    //checking if the user is already in the database
    const emailExist = await User.findOne({ email: req.body.email})
    if(emailExist) return res.status(400).send('Email already exists')

    //hash  password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)


    //create a new user
    const user = new User({
        email: req.body.email,
        password: hashedPassword
    })
    try {
        const savedUser = await user.save();
        res.send({ user: user._id})
    } catch (err) {
        res.status(400).send(err)
    }
})

//login
router.post('/login', async (req, res) =>{
    const { error } = loginValidation(req.body);
   if(error) return res.status(400).send(error.details[0].message);
        //checking if the user is already in the database
        const user = await User.findOne({ email: req.body.email})
        if(!user) return res.status(400).send('Email is not found') 
        // password is correct
        const validPass =  await bcrypt.compare(req.body.password, user.password)
        if(!validPass) return res.status(400).send('Invalid password')

        //Create and assign a token
        const token = jwt.sign({__id: user.__id}, process.env.TOKEN_SECRET)
        res.header('auth-token', token).send(token)
})





module.exports = router