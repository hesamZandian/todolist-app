package handlers

import (
	"net/http"
	"server/config"
	"server/models"

	"github.com/gin-gonic/gin"
)

func DeleteTodo(c *gin.Context) {
	db := config.ConnectDB()
	type DeleteTodoRequest struct {
		ID int
	}
	var deleteTodoInput DeleteTodoRequest
	if err := c.ShouldBindJSON(&deleteTodoInput); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"status": http.StatusBadRequest, "data": "", "message": err.Error()})
		return
	}

	var todo models.Todo

	if err := db.Where("id = ?", deleteTodoInput.ID).First(&todo).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Record not found!"})
		return
	}

	db.Delete(&todo)
	c.JSON(http.StatusOK, gin.H{"status": http.StatusOK, "data": "", "message": "deleted successfully"})
}
