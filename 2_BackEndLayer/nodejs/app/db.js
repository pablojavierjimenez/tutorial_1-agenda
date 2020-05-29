var mysql = require('mysql')

// Create DB connection
var db = mysql.createConnection({
  host:"127.0.0.1",
  user:"root",
  password:"",
  database:"contactListDB"
})

// $port = "3306";
db.connect(function(err){
  if(err) throw err;
  console.log("connection success!!")
})

module.exports = db;
