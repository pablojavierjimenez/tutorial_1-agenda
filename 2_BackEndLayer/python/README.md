# Python

## instal python and pip
```bash
:~$ sudo apt install python3 -y
:~$ sudo apt install python3-pip -y
```

## MySQL DB connection

[Link to post tutorial to user python MySQL connector](https://pynative.com/python-mysql-database-connection/)
```bash
# install the python mysql connector
:~$ pip3 install mysql-connector-python
```
**Connection example:**
```Python
#example
import mysql.connector
from mysql.connector import Error

connection_config_dict = {
    host='localhost',
    database='agendaDB',
    user='root',
    password=''
}
try:
    connection = mysql.connector.connect(**connection_config_dict)
    if connection.is_connected():
        db_Info = connection.get_server_info()
        print("Connected to MySQL Server version ", db_Info)
        cursor = connection.cursor()
        cursor.execute("select database();")
        record = cursor.fetchone()
        print("You're connected to database: ", record)

except Error as e:
    print("Error while connecting to MySQL", e)
finally:
    if (connection.is_connected()):
        cursor.close()
        connection.close()
        print("MySQL connection is closed")
```
----

## Create server
[Link al video tutorial](https://www.afternerd.com/blog/python-http-server/)
```Python
#example
import http.server
import socketserver

PORT = 6080
Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("serving at port", PORT)
    httpd.serve_forever()
```
----
## Create router with without Flask
[Link al video tutorial](https://www.youtube.com/watch?v=tiMLxUKrB-g)
```Python
#example
```
----