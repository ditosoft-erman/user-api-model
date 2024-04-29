const express=require('express')

const router = require('express').Router();

router.get("/",(req,res,next)=>{
    res.send("meow")
})

router.get("/erman",(req,res,next)=>{
    res.send("Hello, Erman")
})


module.exports=router