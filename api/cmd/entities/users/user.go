package users

type User struct {
	Name  string
	Email string
	Id    uint64
}

type CreateUserPayload struct {
	Name  string
	Email string
	Id    uint64
}

func Create(payload CreateUserPayload) *User {
	return &User{
		Name:  payload.Name,
		Email: payload.Email,
		Id:    payload.Id,
	}
}
