package handlers

import (
	"net/http"
	"server/config"
	"server/models"

	"github.com/gin-gonic/gin"
)

func UpdateTodo(c *gin.Context) {
	db := config.ConnectDB()
	var input models.Todo
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var todo models.Todo
	if err := db.Where("id = ?", input.ID).First(&todo).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"status": http.StatusBadRequest, "message": "Record not found!", "data": ""})
		return
	}

	todo.Title = input.Title
	todo.Completed = input.Completed

	if err := db.Model(&todo).Updates(&todo).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"status": http.StatusInternalServerError, "message": "Failed to update record", "error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": todo})
}
