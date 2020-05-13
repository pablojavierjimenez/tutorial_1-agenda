var http = require("http")
var _db = require("./db")
var router = require("./router")

var homeHandler = function (req, res) {
  res.end("Hola soy la HOME")
}

var agendaHandler = function (req, res) {
  _db.query('SELECT * FROM persons LIMIT 10', function(err, rows, fields){
    if(err) throw err
    res.end(JSON.stringify(rows))
  })
  _db.end()
}

router.route('/', homeHandler)
router.route('/agenda', agendaHandler)

// Creamos el servidor
http.createServer(router.requestHandler).listen(7080)


