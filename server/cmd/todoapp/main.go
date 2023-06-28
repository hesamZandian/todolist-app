package main

import (
	"fmt"

	"github.com/gin-gonic/gin"
)

func main() {
	routes := gin.Default()

	err := routes.Run(":8080")
	if err != nil {
		fmt.Println(err)
	}
}
