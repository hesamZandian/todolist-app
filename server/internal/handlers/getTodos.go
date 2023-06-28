package handlers

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"server/config"
	"server/models"
)

func GetTodos(c *gin.Context) {
	db := config.ConnectDB()
	var todos []models.Todo

	db.Find(&todos)

	c.JSON(http.StatusOK, gin.H{"status": http.StatusOK, "data": todos, "message": ""})
}
