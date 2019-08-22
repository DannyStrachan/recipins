DROP TABLE IF EXISTS recipins_users;
CREATE TABLE recipins_users (
    id SERIAL PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    is_seller BOOLEAN
);
SELECT * FROM recipins_users;


DROP TABLE IF EXISTS recipin_boards;
CREATE TABLE recipin_boards (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    board_name TEXT NOT NULL,
    img_url TEXT NOT NULL
);
SELECT * FROM recipin_boards;


DROP TABLE IF EXISTS saved_recipins;
CREATE TABLE saved_recipins (
    recipin_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    board_id INT NOT NULL,
    publisher VARCHAR(100),
    publisher_url TEXT,
    social_rank INT,
    title TEXT,
    f2f_url TEXT,
    image_url TEXT,
    source_url TEXT,
    recipe_id VARCHAR(12)
);
SELECT * FROM saved_recipins;

DROP TABLE IF EXISTS seller_boards;
CREATE TABLE seller_boards(
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    board_name VARCHAR(50) NOT NULL,
    img_url TEXT NOT NULL
);
SELECT * FROM seller_boards;

