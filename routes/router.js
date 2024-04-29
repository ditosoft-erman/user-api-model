
const usercontroller=require("../controllers/UserController");    
const router = require('express').Router();

router.get("/",(_req,res,next)=>{
    res.send("meow")
}),

router.get("/alluser",usercontroller.getalluser)
router.post("/adduser", usercontroller.addnewuser)
    

module.exports=router