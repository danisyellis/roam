DROP TABLE IF EXISTS users;
CREATE TABLE users(
  id serial primary key,
  email varchar(100) NOT NULL UNIQUE,
  password varchar(255) NOT NULL,
  name varchar(255),
  date_joined DATE NOT NULL DEFAULT CURRENT_DATE,
  current_city varchar(255)
);

DROP TABLE IF EXISTS cities;
CREATE TABLE cities(
  id serial primary key,
  name varchar(255) NOT NULL UNIQUE,
  image_url varchar(255)
);

DROP TABLE IF EXISTS posts;
CREATE TABLE posts(
  id serial primary key,
  title varchar(255) NOT NULL,
  content text NOT NULL,
  user_id INTEGER REFERENCES users (id),
  city_id INTEGER REFERENCES cities (id)
);
