package main

import (
	"database/sql"
	"fmt"

	_ "github.com/go-sql-driver/mysql"
)

func main() {

	fmt.Println("Go MySQL Connection")

	// esta linea no funciono porque inclui el password como en el tutorial,
	// pero mi base dedatos no usa password,
	// pero la dejo comentada para futuras referencias
	// db, err := sql.Open("mysql", "root:password@tcp(127.0.0.1:3306)/agenda")
	db, err := sql.Open("mysql", "root:password@tcp(127.0.0.1:3306)/agenda")

	if err != nil {
		panic(err.Error())
	}

	insertString := "INSERT INTO agenda (`full_names`,`direction`,`house_phone`,`mobile_phone`,`email`)VALUES ('marcos rosi','giñu 9486',45693873,11563564325,'marcos.rosi@company.com')"

	insert, err := db.Query(insertString)

	if err != nil {
		panic(err.Error())
	}

	defer insert.Close()

	fmt.Println("Successfully incerted database")
}
