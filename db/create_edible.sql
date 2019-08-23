INSERT INTO created_seller_edibles (
    user_id,
    seller_board_id,
    image_url,
    title,
    edible_description,
    price
)
VALUES ($1, $2, $3, $4, $5, $6)
RETURNING *;