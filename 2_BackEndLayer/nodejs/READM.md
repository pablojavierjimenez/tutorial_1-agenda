# NodeJS



## MySQL DB connection
[video tutorial of MySQL connection](https://www.youtube.com/watch?v=Eb-jstRRpcA)

[Link a el repositorio de MySql en NPM](https://www.npmjs.com/package/mysql)

**ejemṕlo:**
```js
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.end();
```
----
## Create server
[Link al video tutorial](https://youtu.be/wd8zf3D0jic)
```js
var http = require("http")

var homeHandler = function (req, res) {
  res.end("Hola soy la HOME")
}

// Creamos el servidor
http.createServer(homeHandler).listen(7080)
```
----
## Create router with without express
[Link al video tutorial](https://www.youtube.com/watch?v=tiMLxUKrB-g)
```js
var url = require("url")

var routes = {};

module.exports = {
  route: function (routePath, routeHandler) {
    routes[routePath] = routeHandler;
  },
  requestHandler: function (request, response) {
    var path = url.parse(request.url).pathname;
    if (routes[path]) {
      response.writeHead(200, {'content-type': 'text/json'})
      routes[path](request, response);
    } else {
      console.log(path, " NO existe")
      response.writeHead(404, {'content-type': 'text/json'})
      response.write('Route not defined')
    }
  }
}
```
----
