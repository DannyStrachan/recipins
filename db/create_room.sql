INSERT INTO edible_rooms( room_id, user_id, creator_id, room_img )
VALUES ( $1, $2, $3, $4 )
RETURNING *;