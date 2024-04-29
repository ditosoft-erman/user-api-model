const userModel=require("../models/User")


class UserController {

    static async getalluser(req,res)
    {
        const results =  await userModel.getusers()
        res.send(results)
        
    }

    static async addnewuser(req,res)
    {   
        var first_name = req.body.first_name;
        var last_name = req.body.last_name;      
        var email = req.body.email;
        var pass =  req.body.pass;

        var x = await userModel.adduser(req.body.first_name, req.body.last_name, req.body.email, req.body.pass)
        if(x==true)
        res.send("add succesfully")
        else
        res.send("Add failed")
    }
}

module.exports=UserController;