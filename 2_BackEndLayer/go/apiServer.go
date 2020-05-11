package apiServer

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

type PersonApi struct {
	Id   int    `json:"id"`
	Name string `json:"name"`
}

type PersonsApi []PersonApi

func agenda(w http.ResponseWriter, r *http.Request) {
	agenda := PersonsApi{
		PersonApi{Id: 1, Name: "juan"},
		PersonApi{Id: 3, Name: "Maria"},
	}
	fmt.Println(agenda)
	json.NewEncoder(w).Encode(agenda)
}

func homePage(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Welcome to the JomePage Park!")
	fmt.Println("Home page Requested")
}

func requestHandler() {
	http.HandleFunc("/", homePage)
	http.HandleFunc("/agenda", agenda)

	log.Fatal(http.ListenAndServe(":8081", nil))
}

func main() {
	requestHandler()
}
