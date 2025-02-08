package api

import (
	"net/http"
	"time"

	"github.com/alexedwards/scs/v2"
)

type ServerConfigParams struct{}

var sessionManager *scs.SessionManager

func Server(config *ServerConfigParams) {
	sessionManager = scs.New()
	sessionManager.Lifetime = 24 * time.Hour
	router := router()

	http.ListenAndServe(":8000", sessionManager.LoadAndSave(router))
}
