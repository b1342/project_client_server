const{people,books}=require('../data')
const express = require("express")
const router = express.Router()

router.get("/t2/:getid",(req,res)=>{
    const{getid}=req.params
    const best=books.find((book)=>{return book.id===Number(getid)})
    res.json(best)
})

module.exports=router