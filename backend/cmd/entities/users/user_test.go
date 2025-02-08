package users

import (
	"testing"
)

func TestUserCreation(t *testing.T) {
	payload := CreateUserPayload{
		Name:  "Alberto",
		Email: "alberto@email.com",
		Id:    3,
	}
	user := Create(payload)
	if user == nil {
		t.Errorf("User expected to be created")
	}
	t.Log(user, "loquita")
}
