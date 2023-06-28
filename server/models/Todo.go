package models

import "gorm.io/gorm"

type Todo struct {
	gorm.Model
	Title     string `json:"title" binding:"required"`
	Completed bool   `json:"completed"`
}
