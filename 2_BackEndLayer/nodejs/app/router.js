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
