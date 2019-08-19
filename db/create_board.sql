INSERT INTO recipin_boards (user_id, board_name, img_url)
VALUES($1, $2, $3)
RETURNING *;