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
	err := db.AutoMigrate(&models.Todo{})
	if err != nil {
		return
	}

	routes := gin.Default()

	apiRoutes := routes.Group("/api")

	apiRoutes.GET("/todos", handlers.GetTodos)
	apiRoutes.POST("/todos", handlers.CreateTodo)
	apiRoutes.POST("/delete-todo", handlers.DeleteTodo)
	apiRoutes.POST("/update-todo", handlers.UpdateTodo)

	routesErr := routes.Run(":8080")
	if routesErr != nil {
		fmt.Println(routesErr.Error())
	}
}
