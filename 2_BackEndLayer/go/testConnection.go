package testConnection

import (
	"database/sql"
	"fmt"

	_ "github.com/go-sql-driver/mysql"
)

type PersonsTest struct {
	id           int    `json:"id"`
	full_names   string `json:"name"`
	direction    string `json:"addres"`
	house_phone  int    `json:"housePhone"`
	mobile_phone int    `json:"mobilePhone"`
	email        string `json:"email"`
	avatar       string `json:"avatar"`
}

func main() {

	fmt.Println("Go MySQL Connection")

	// esta linea no funciono porque inclui el password como en el tutorial,
	// pero mi base dedatos no usa password,
	// pero la dejo comentada para futuras referencias
	// db, err := sql.Open("mysql", "root:password@tcp(127.0.0.1:3306)/agenda")
	db, err := sql.Open("mysql", "root@tcp(127.0.0.1:3306)/agendaDB")

	if err != nil {
		panic(err.Error())
	}

	result, err := db.Query("SELECT * FROM `personsTest` LIMIT 10")

	if err != nil {
		panic(err.Error())
	}

	for result.Next() {
		var person PersonsTest

		err = result.Scan(&person.id, &person.full_names, &person.direction, &person.house_phone, &person.mobile_phone, &person.email, &person.avatar)
		if err != nil {
			panic(err.Error())
		}

		fmt.Println(person)
	}
	// insertString := "INSERT INTO agenda (`full_names`,`direction`,`house_phone`,`mobile_phone`,`email`)VALUES ('marcos rosi','giñu 9486',45693873,11563564325,'marcos.rosi@company.com')"

	// insert, err := db.Query(insertString)

	// if err != nil {
	// 	panic(err.Error())
	// }

	// defer insert.Close()

	// fmt.Println("Successfully incerted database")
}
