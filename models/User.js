const db = require("../config/db");

class UserModel {

  static async getusers() {
    return new Promise((resolve) => {
      db.query("SELECT * FROM users", [], (error, result) => {
        if (!error) resolve(result);
        else resolve([]);
      });
    });
  }

  static async adduser(first_name, last_name, email, password) {
    return new Promise((resolve) => {
      db.query(
        "INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)",
        [first_name, last_name, email, password],
        (error, result) => {
          if (!error) resolve(true);
          else {
            console.error("Error adding user:", error);
            resolve(false);
          }
        }
      );
    });
  }

  static async deleteuser(id) {
    return new Promise((resolve) => {
      db.query("DELETE FROM users WHERE id=?", [id], (error, result) => {
        if (!error) resolve(true);
        else {
          console.error("Error deleting user:", error);
          resolve(false);
        }
      });
    });
  }

  static async edit(id, first_name, last_name, email, password) {
    return new Promise((resolve) => {
      db.query(
        "UPDATE users SET first_name=?, last_name=?, email=?, password=? WHERE id=?",
        [first_name, last_name, email, password, id],
        (error, result) => {
          if (!error) resolve(true);
          else {
            console.error("Error updating user:", error);
            resolve(false);
          }
        }
      );
    });
  }

  static async login(email, password) {
    return new Promise((resolve) => {
      db.query(
        "SELECT * FROM users WHERE email=? AND password=?",
        [email, password],
        (error, result) => {
          if (!error && result.length > 0) {
            
            resolve(true);
          } else {
         
            resolve(false);
          }
        }
      );
    });
  }
}

module.exports = UserModel;
