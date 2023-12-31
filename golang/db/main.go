package main

import (
	"database/sql"
	"log"
  "fmt"

	_ "github.com/lib/pq"
)

type Product struct {
	name      string
	Price     float64
	Available bool
}

func main() {
	conStr := "postgres://postgres:secret@localhost:5433/gopgtest?sslmode=disable"

	db, err := sql.Open("postgres", conStr)

	if err != nil {
		log.Fatal(err)
	}

	if err = db.Ping(); err != nil {
		log.Fatal(err)
	}

	defer db.Close()
	createProductTable(db)

// 	product := Product{"Book", 12.99, true}
//
// 	pk := insertProduct(db, product)
//
//   var name string
//   var available bool
//   var price float64
//
//   query := `SELECT name, price, available FROM products WHERE id = $1`
//
//   err = db.QueryRow(query, pk).Scan(&name, &price, &available)
//
//   if err != nil {
//     log.Fatal(err)
//   }
//
//   fmt.Println("Name:", name)
//   fmt.Println("Price:", price)
//   fmt.Println("Available:", available)

  data := []Product{}
  rows, err := db.Query(`SELECT name, price, available FROM products`)
  if err != nil {
    log.Fatal(err)
  }

  defer rows.Close()

  var name string
  var available bool
  var price float64

  for rows.Next() {
    err := rows.Scan(&name, &price, &available)
    if err != nil {
      log.Fatal(err)
    }
    data = append(data, Product{name, price, available})
  }

  fmt.Println(data)
  
}

func createProductTable(db *sql.DB) {
	/* Product Table
	- ID
	- Name
	- Price
	- Available
	- Date created
	*/

	query := `CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price NUMERIC(6,2) NOT NULL, 
    available BOOLEAN,
    created timestamp DEFAULT NOW()
  )`

	_, err := db.Exec(query)

	if err != nil {
		log.Fatal(err)
	}

}

func insertProduct(db *sql.DB, p Product) int {
	query := `INSERT INTO products (name, price, available) VALUES ($1, $2, $3) RETURNING id`

	var pk int
	//_, err := db.Exec(query, p.name, p.Price, p.Available)
	err := db.QueryRow(query, p.name, p.Price, p.Available).Scan(&pk)

	if err != nil {
		log.Fatal(err)
	}

	return pk
}
