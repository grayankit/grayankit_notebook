const express = require('express');
const router = express.Router();    //router is a function

router.get('/',(req,res)=>{
    res.send([]);  //res.send is a function
})

module.exports = router;