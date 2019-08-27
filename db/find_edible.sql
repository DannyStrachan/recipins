-- SELECT * FROM created_seller_edibles
-- WHERE id = $1;

    SELECT
        edible_description,
        recipins_users.id AS seller_id,
        image_url,
        price,
        seller_board_id,
        title,
        created_seller_edibles.user_id,
        recipins_users.profile_pic,
        recipins_users.username
        FROM
        created_seller_edibles
        INNER JOIN recipins_users on recipins_users.id = created_seller_edibles.user_id
        WHERE created_seller_edibles.id = $1;