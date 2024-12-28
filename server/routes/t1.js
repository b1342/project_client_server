const{people,books}=require('../data')
const express = require("express")
const router = express.Router()

router.get('/t1',(req,res)=>{
    res.json({ people, books })
})
module.exports = router