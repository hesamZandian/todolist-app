package main

import (
	"fmt"
	"server/config"
	"server/internal/handlers"
	"server/models"

	"github.com/gin-gonic/gin"
)

func main() {
	var db = config.ConnectDB()
	db.AutoMigrate(&models.Todo{})

	routes := gin.Default()

	apiRoutes := routes.Group("/api")

	apiRoutes.GET("/todos", handlers.GetTodos)
	apiRoutes.POST("/todos", handlers.CreateTodo)

	err := routes.Run(":8080")
	if err != nil {
		fmt.Println(err)
	}
}
