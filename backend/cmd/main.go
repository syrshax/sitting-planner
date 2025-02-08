package main

import (
	"fmt"

	"syrshax/sitting-planner/api/cmd/api"
)

func main() {
	fmt.Printf("Hello World, server running at localhost!!")
	config := api.ServerConfigParams{}
	api.Server(&config)
}
