CREATE TABLE recipins_users (
    id SERIAL PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    is_seller BOOLEAN
);

-- SELECT * FROM recipins_users;

-- DROP TABLE recipins_users;