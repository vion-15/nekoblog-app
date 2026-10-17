package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/vion-15/nekoblog-app/auth-service/internal/common/middleware"
)

func SetupRouter() *gin.Engine {
	// Default untuk Logger dan Recovery bawaan gin
	r := gin.Default()

	// Konfigurasi CORS
	r.Use(middleware.ConfigCORS())

	return r
}
