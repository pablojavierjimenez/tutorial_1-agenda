# Python

## install python and pip
```bash
:~$ sudo apt install python3 -y
:~$ sudo apt install python3-pip -y
```

## MySQL DB connection

[**Link to post tutorial to use python MySQL connector**](https://pynative.com/python-mysql-database-connection/)
```bash
# install the python mysql connector
:~$ pip3 install mysql-connector-python
```
**Connection example:** on the `db.py` file.
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
[Link to create server video tutorial](https://www.afternerd.com/blog/python-http-server/)
```Python
#example
import http.server
import socketserver

PORT = 9080
Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("serving at port", PORT)
    httpd.serve_forever()
```
----
## Create router with Flask
**NOTA:** how I can't find easily, how can I crete an API router without framework, I'll gonna do it with a framework `¯\_(ツ)_/¯`
- [Link to the simple Flask video tutorial](https://www.youtube.com/watch?v=IRbJc_QmMYY)
- [Link to the simple Flask  Post tutorial](https://medium.com/daily-python/building-a-simple-rest-api-using-python-flask-daily-python-14-488d63701bd2)
- [Link to the Post about JSON in python](https://medium.com/@PyGuyCharles/python-sql-to-json-and-beyond-3e3a36d32853)

to use flask first of all, we need to create a virtual enviroment, for that we need to install `venv`
```bash
# Install python env
:~$ sudo apt install python3-venv
# then ACTIVATE the virtual enviroment with the next command
:~$ . venv/bin/activate
# after Activate you can see the prompt change
(venv) :~$
# and you can DEACTIVATE the virtual enviroment with
(venv) :~$ deactivate
```
**Note:** After install and start the enviroment we don't need to write python**3** or pip**3**, any more

Now we gonna install a couple of necesaries libraries
```bash
# install the python Flasck library
:~$ pip install Flask
# install the python mysql connector
:~$ pip install mysql-connector-python
# and then you can check your instaled packages with this command
(venv) user@usr-pc path/to/project:~$ pip list
```
**Important:** Flask by default always use the file named **app** (`app.py`) as the entry point when you execute the **run** command (`flask run`)
```bash
# Now you can start the flask app, by default it roun on localhost:5000
(venv) user@usr-pc path/to/project:~$ flask run
# but you can specify the port if you wish
(venv) user@usr-pc path/to/project:~$ flask run -p 9080
```
