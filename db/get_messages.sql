SELECT 
    room_id,
    user_id,
    message,
    created_at,
    recipins_users.username,
    recipins_users.profile_pic
FROM
    edible_messages
INNER JOIN recipins_users on recipins_users.id = edible_messages.user_id
WHERE edible_messages.room_id = $1;