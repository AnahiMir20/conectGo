CREATE DATABASE conectgo

USE conectgo

CREATE TABLE users
(
    id_user int NOT NULL IDENTITY (1,1),
    first_name VARCHAR (30),
    last_name VARCHAR(30),
    city VARCHAR(30),
    country VARCHAR(30),
    linkedln VARCHAR(60),
    age DATE,
    email VARCHAR(50) NOT NULL UNIQUE,
    [password] VARCHAR(50) NOT NULL,
    PRIMARY KEY(id_user)
)
INSERT INTO users
VALUES
    ('Edgar', 'Bastida','CDMX','México', 'https://www.linkedin.com/in/edgar-bastida/', '1995-03-12', 'edgar@mail.com','edgarpass'),
    ('Anahi', 'Miranda','EDOMEX','México', 'https://www.linkedin.com/in/anahi-miranda/', '2000-08-17', 'anahi@mail.com','anahipass'),
    ('Carla', 'Valdez','TOLUCA','México', 'https://www.linkedin.com/in/carla-valdez/', '2004-09-26', 'carla@mail.com','carlapass'),
    ('Ruth', 'Mencheli','EDOMEX','México', 'https://www.linkedin.com/in/ruth-menchelli/', '1975-11-06', 'ruth@mail.com','ruthpass');

SELECT *
FROM users

CREATE TABLE picture (
    id_picture INT NOT NULL IDENTITY (1,1),
    id_user INT NOT NULL,
    img VARCHAR(MAX) NOT NULL,
    PRIMARY KEY(id_picture),
    FOREIGN KEY (id_user) REFERENCES users(id_user)
)
SELECT *
FROM picture

CREATE TABLE cvUser (
    id_cv INT NOT NULL IDENTITY(1,1),
    id_user INT NOT NULL,
    cv VARBINARY(MAX) NOT NULL,
    PRIMARY KEY(id_cv),
    FOREIGN KEY (id_user) REFERENCES users(id_user)
)

SELECT *
FROM cvUser


CREATE TABLE studies
(
    id_study INT NOT NULL IDENTITY(1,1),
    id_user INT NOT NULL,
    place VARCHAR(50),
    title VARCHAR(50),
    PRIMARY KEY (id_study),
    FOREIGN KEY (id_user) REFERENCES users(id_user)
)

INSERT INTO studies
VALUES
    (2, 'Tecla Coding Academy', 'BackEnd Jr Developer'),
    (1, 'Tecla Coding Academy', 'FrontEnd Developer'),
    (1, 'Tecla Coding Academy', 'BackEnd Jr Developer');


SELECT *
FROM studies

CREATE TABLE idioms
(
    id_idioms INT NOT NULL IDENTITY(1,1),
    id_user INT NOT NULL,
    name_idioms VARCHAR(50),
    idioms_level VARCHAR(50),
    place VARCHAR(50),
    PRIMARY KEY (id_idioms),
    FOREIGN KEY (id_user) REFERENCES users(id_user)
)

INSERT INTO idioms
VALUES
    (2, 'Inglés', 'Intermedio', 'USA'),
    (1, 'Inglés', 'Intermedio', 'Escuela');

SELECT *
FROM idioms

CREATE TABLE hobbies
(
    id_hobby INT NOT NULL IDENTITY(1,1),
    id_user INT NOT NULL,
    name_hobby VARCHAR (50)
        PRIMARY KEY (id_hobby),
    FOREIGN KEY (id_user) REFERENCES users(id_user)
)

INSERT INTO hobbies
VALUES
    (1, 'Leer libros');

SELECT * 
FROM hobbies


CREATE TABLE friend_request
(
    id_request INT NOT NULL IDENTITY(1,1),
    id_user INT NOT NULL,
    id_friend INT NOT NULL,
    request_status INT NOT NULL,
    PRIMARY KEY (id_request),
    FOREIGN KEY (id_user) REFERENCES users(id_user),
    FOREIGN KEY (id_friend) REFERENCES users(id_user)
)
