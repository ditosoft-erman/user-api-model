const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "users_database",
});

db.getConnection(() => {
  console.log("connect to db successfully");
});

module.exports = db;