INSERT INTO recipins_users(username, email, password, profile_pic)
VALUES($1, $2, $3, $4)
RETURNING *;