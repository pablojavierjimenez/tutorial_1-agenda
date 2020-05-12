var _db = require("./db")

_db.query('SELECT * FROM persons LIMIT 10', function(err, result, fields){
    if(err) throw err;

    console.log("results: ", result);
})