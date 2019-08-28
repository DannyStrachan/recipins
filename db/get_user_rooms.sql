SELECT
    edible_rooms.id,
    edible_rooms.room_id,
    edible_rooms.user_id,
    edible_rooms.creator_id,
    edible_rooms.room_img,
    recipins_users.username
FROM
    edible_rooms
INNER JOIN recipins_users ON recipins_users.id = edible_rooms.user_id
WHERE user_id = $1 OR creator_id = $1;