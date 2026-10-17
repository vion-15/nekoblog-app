package main

import (
	"fmt"
	"log"
	"os"

	"github.com/vion-15/nekoblog-app/auth-service/internal/auth/routes"
	"github.com/vion-15/nekoblog-app/auth-service/internal/common/database"
)

func main() {
	_, err := database.ConnectDatabase()
	if err != nil {
		log.Fatalf("Failed connect to database: %v", err)
	}

	r := routes.SetupRouter()

	port := os.Getenv("PORT")

	fmt.Printf("Server Running at Port:%s", port)
	if err := r.Run(":" + port); err != nil {
		log.Fatalf("Server Stopped : %v", err)
	}
}
