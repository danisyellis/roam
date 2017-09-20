DROP TABLE IF EXISTS users;
CREATE TABLE users(
  id serial primary key,
  email varchar(20) NOT NULL UNIQUE,
  password varchar(255) NOT NULL
);

DROP TABLE IF EXISTS posts;
CREATE TABLE posts(
  id serial primary key,
  title varchar(255) NOT NULL,
  content text NOT NULL,
  user_id INTEGER REFERENCES users (id)
);
