CREATE DATABASE perntodo;
CREATE TABLE todo(
    tid SERIAL PRIMARY KEY,
    todo_name VARCHAR(100),
    scale INT UNIQUE,
    due_time TIMESTAMP,
    description VARCHAR(300)
);