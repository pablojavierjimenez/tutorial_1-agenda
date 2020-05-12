var http = require("http")
var _db = require("./db")


var homeHandler = function (req, res) {
  console.log("hola sol el server de la home")

  res.end("Hola soy la home")
}




_db.query('SELECT * FROM persons LIMIT 10', function(err, result, fields){
  if(err) throw err;

  console.log("results: ", result);
})

_db.end()

// Creamos el servidor
var server = http.createServer(homeHandler);

server.listen(7080)
