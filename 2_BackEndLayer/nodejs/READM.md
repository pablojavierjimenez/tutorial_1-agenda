# NodeJS



- [video tutorial of MySQL connection](https://www.youtube.com/watch?v=Eb-jstRRpcA)
- [Link a el repositorio de NPM]()
- **ejemṕlo:**
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
