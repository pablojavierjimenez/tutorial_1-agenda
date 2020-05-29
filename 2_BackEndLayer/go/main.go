package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
)

/**
+ Creamos los entidades(?
*/
type Person struct {
	Id      int    `json:"id"`
	Names   string `json:"name"`
	Address string `json:"addres"`
	Phone   int    `json:"housePhone"`
	Mobile  int    `json:"mobilePhone"`
	Email   string `json:"email"`
	Avatar  string `json:"avatar"`
}

type Persons []Person

// Conectamos con la base de datos
func databaseConnection() (*sql.DB, error) {
	db, err := sql.Open("mysql", "root@tcp(127.0.0.1:3306)/contactListDB")
	if err != nil {
		panic(err.Error())
	}
	return db, err
}

/**
+ Controlles
*/
func homeController(w http.ResponseWriter, r *http.Request) {
	fmt.Println("recived request to: /")
	fmt.Fprintf(w, "Hola gente esta es la home")
}

func agendaController(w http.ResponseWriter, r *http.Request) {
	fmt.Println("recived request to: /agenda")

	index := 0
	agenda := make([]Person, 0, 10)
	queryString := "SELECT * FROM `persons` LIMIT 10"
	connection, err := databaseConnection()

	if err != nil {
		panic(err.Error())
	}

	data, err := connection.Query(queryString)

	if err != nil {
		panic(err.Error())
	}

	for data.Next() {
		index++
		var person Person
		err = data.Scan(&person.Id, &person.Names, &person.Address, &person.Phone, &person.Mobile, &person.Email, &person.Avatar)
		if err != nil {
			panic(err.Error())
		}
		agenda = append(agenda, person)
	}

	json.NewEncoder(w).Encode(agenda)
}

func routesHandler() {
	http.HandleFunc("/", homeController)
	http.HandleFunc("/agenda", agendaController)
}

func main() {
	routesHandler()
	fmt.Println("Server running on: localhost:9080")
	log.Fatal(http.ListenAndServe(":9080", nil))
}
