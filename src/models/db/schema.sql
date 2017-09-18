DROP TABLE IF EXISTS users;
CREATE TABLE users(
  id serial primary key,
  email varchar(20) NOT NULL UNIQUE,
  password varchar(255) NOT NULL
);
