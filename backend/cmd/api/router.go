package api

import (
	"net/http"

	"syrshax/sitting-planner/api/cmd/api/handlers"
)

func router() *http.ServeMux {
	mux := http.NewServeMux()

	mux.HandleFunc("GET /", handlers.Home)
	mux.HandleFunc("POST /api/users", handlers.CreateUser)

	return mux
}
