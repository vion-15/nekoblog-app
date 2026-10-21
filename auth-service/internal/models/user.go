package models

import (
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type UserRole string

const (
	RoleAdmin UserRole = "admin"
	RoleUser  UserRole = "blogger"
)

type User struct {
	ID           uuid.UUID `gorm:"type:uuid;primarykey;not null" json:"id"`
	Username     string    `gorm:"type:varchar(50);unique;not null" json:"username"`
	Email        string    `gorm:"type:varchar(100);unique;not null" json:"email"`
	PasswordHash string    `gorm:"type:text;not null" json:"-"`
	Image        string    `gorm:"type:text" json:"image"`
	Role         UserRole  `gorm:"varchar(20);not null" json:"role"`
	IsActive     bool      `gorm:"type:boolean;" json:"status"`
	CreatedAt    time.Time `json:"created_at"`
	UpdatedAt    time.Time `json:"updated_at"`
}

func (u *User) BeforeCreate(tx *gorm.DB) (err error) {
	u.ID = uuid.New()
	tx.Model(u).Update("Role", RoleUser)
	return
}
