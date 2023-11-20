DROP DATABASE IF EXISTS
 shaqualafredericks;
CREATE DATABASE shaqualafredericks;
\c shaqualafredericks;

CREATE TABLE vintages(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    style TEXT NOT NULL,
    category TEXT NOT NULL,
    price INTEGER,
    isfavorite BOOLEAN
);


