const userModel = require("../models/User");
const { validationResult } = require("express-validator");
const jwt = require('jsonwebtoken');

class UserController {
  static async getalluser(req, res) {
    var results = await userModel.getusers();
    if (results) res.send(results);
  }

  static async addnewuser(req, res) {
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;
    var email = req.body.email;
    var password = req.body.password;
    var x = await userModel.adduser(first_name, last_name, email, password);
    if (!x) res.send("add successfully");
    else {
      res.send("add failed");
    }
    
  }

  static async deleteuser(req, res) {
    const id = req.body.id;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json(errors.array());
    } else {
      if (id) {
        var result = await userModel.deleteuser(id);
        if (result) res.send("delete done");
        else res.send("delete failed");
      }
    }
  }

  static async updateuser(req, res) {
    const id = req.body.id;
    const newname = req.body.first_name;
    const newlastname = req.body.last_name;
    const newemail = req.body.email;
    const newpassword = req.body.password;

    var x = await userModel.edit(id, newname, newlastname, newemail, newpassword);
    if (x) res.send("update successfully");
    else {
      res.send("update failed");
    }
  }

  static async loginUser(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    try {
      const isAuthenticated = await userModel.login(email, password);
      if (isAuthenticated) {
        res.send("Login successful");
      } else {
        res.status(401).send("Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).send("Internal server error");
    }
  }
}

module.exports = UserController;
