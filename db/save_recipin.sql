INSERT INTO saved_recipins (
    user_id,
    board_id,
    publisher,
    publisher_url,
    social_rank,
    title,
    f2f_url,
    image_url,
    source_url,
    recipe_id)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);