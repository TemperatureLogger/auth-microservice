CREATE TABLE IF NOT EXISTS users (
    id serial PRIMARY KEY,
    username VARCHAR NOT NULL UNIQUE,
    password VARCHAR NOT NULL,
    serialNumber decimal(6) NOT NULL UNIQUE,
    isadmin BOOLEAN NOT NULL DEFAULT false
);

CREATE TABLE IF NOT EXISTS hwAddress (
    serialNumber decimal(6) PRIMARY KEY
    -- userId INTEGER NOT NULL references users(id)
);

INSERT INTO hwAddress (serialNumber) VALUES (995346);
INSERT INTO hwAddress (serialNumber) VALUES (553123);
INSERT INTO hwAddress (serialNumber) VALUES (123456);
INSERT INTO hwAddress (serialNumber) VALUES (999999);
INSERT INTO hwAddress (serialNumber) VALUES (112991);
