from flask import Flask
from flask import jsonify
import mysql.connector
from mysql.connector import Error

app = Flask(__name__)

# -----
# DattaBase connection
# -----
mydb = None
connection_config_dict = {
    'host':'localhost',
    'database':'contactListDB',
    'user':'root',
    'password':''
}

def createConnection():
    global mydb
    try:
        mydb = mysql.connector.connect(**connection_config_dict)
        if mydb.is_connected():
            db_Info = mydb.get_server_info()
            print("Connected to MySQL Server version ", db_Info)
    except Error as e:
        print("Error while connecting to MySQL", e)
    # finally:
    #     if (mydb.is_connected()):
    #         cursor.close()
    #         mydb.close()
    #         print("MySQL connection is closed")

createConnection()
# ----

# ----
# App Handlers controller
# ----
def get_agenda():
    cursor = mydb.cursor()
    cursor.execute("SELECT * FROM `persons` LIMIT 10")
    data = cursor.fetchall()
    jsonResponse = []

    for item in data:
        jsonResponse.append({
            'id': item[0], 
            'name': item[1], 
	        'addres': item[2],
	        'housePhone': item[3],
	        'mobilePhone': item[4],
	        'email': item[5],
	        'avatar': item[6]
        })

    return jsonResponse

from pprint import PrettyPrinter
pp = PrettyPrinter()
pp.pprint(get_agenda)

@app.route('/')
def index():
    return 'Done'

@app.route('/agenda')
def agendaHandler():
    response = get_agenda()
    if len(response) == 0:
        return jsonify({"Eror":" Bo"})
    else:
        return jsonify(response)

if __name__ == "__name__":
    app.run(debug=True, host="127.0.0.1", port=9080)