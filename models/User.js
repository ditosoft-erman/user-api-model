const db=require("../config/db")

class UserModel{

    static async getusers()
    {

        return Promise (resolve =>{

            db.query("select * from users",[],(error, result) =>{
                
                if(!error)
                resolve(result)
            })
        })

    }

    static async adduser(first_name, last_name, email, pass)
    {
        return Promise(resolve=>{
            db.query("insert into users (first_name, last_name, email, pass) values(?,?,?,?)", [first_name, last_name, email, pass], (e,r)=>{

                if(!e)
                resolve(true)
                else
                resolve(false)
            })
        })
    }

}

module.exports=UserModel