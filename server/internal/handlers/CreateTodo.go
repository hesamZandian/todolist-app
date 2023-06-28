package handlers

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"server/config"
	"server/models"
)

func CreateTodo(c *gin.Context) {
	db := config.ConnectDB()
	var todoInput models.Todo
	if err := c.ShouldBindJSON(&todoInput); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"status": http.StatusBadRequest, "data": "", "message": err.Error()})
		return
	}

	newTodo := models.Todo{Title: todoInput.Title, Completed: todoInput.Completed}
	result := db.Create(&newTodo)
	if err := result.Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"status": http.StatusInternalServerError, "data": "", "message": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"status": http.StatusOK, "data": newTodo, "message": "todo created successfully"})
}
