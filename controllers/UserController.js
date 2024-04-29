const userModel =require("../models/User")


class UserController {

    static async getalluser(req,res){
        var results = await userModel.getusers();

        if(results)
        res.send(results)
    }
}

module.exports=UserController;