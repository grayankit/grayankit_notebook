const express = require('express');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const router = express.Router();    //router is a function


// Create a user using: POST "/api/auth/" .Doesn't require auth
router.post('/createuser',
[
    body('name','Enter a valid name').isLength({ min: 3}),
    body('email','Enter a valid email').isEmail(),
    body('password','Your password should contain at least 5 characters').isLength({ min: 5 })
]
, async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let user = await User.findOne({email: req.body.email});
    if(user){
      return res.status(400).json({error:"Sorry! a user with this email alrady exist"})
    }
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })
    
    // .then(user => res.json(user))
    // .catch(err=> {console.log(err)
    // res.json({error:"Please enter a unique value for email",message:err.message})})
    res.json({Sucess:"User created successfully"})
})

module.exports = router;