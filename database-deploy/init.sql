CREATE TABLE IF NOT EXISTS users (
    id serial PRIMARY KEY,
    username VARCHAR NOT NULL UNIQUE,
    password VARCHAR NOT NULL,
    serialNumber decimal(6) NOT NULL,
    isadmin BOOLEAN NOT NULL DEFAULT false
);

CREATE TABLE IF NOT EXISTS hwAddress (
    serialNumber decimal(6) PRIMARY KEY
    -- userId INTEGER NOT NULL references users(id)
);

INSERT INTO hwAddress (serialNumber) VALUES (111111);
INSERT INTO hwAddress (serialNumber) VALUES (111112);
INSERT INTO hwAddress (serialNumber) VALUES (111113);
INSERT INTO hwAddress (serialNumber) VALUES (111114);
INSERT INTO hwAddress (serialNumber) VALUES (111115);
INSERT INTO hwAddress (serialNumber) VALUES (111116);
INSERT INTO hwAddress (serialNumber) VALUES (111117);
INSERT INTO hwAddress (serialNumber) VALUES (111118);
INSERT INTO hwAddress (serialNumber) VALUES (111119);
INSERT INTO hwAddress (serialNumber) VALUES (111120);
INSERT INTO hwAddress (serialNumber) VALUES (111121);
INSERT INTO hwAddress (serialNumber) VALUES (111122);
INSERT INTO hwAddress (serialNumber) VALUES (111123);
INSERT INTO hwAddress (serialNumber) VALUES (111124);
INSERT INTO hwAddress (serialNumber) VALUES (111125);
INSERT INTO hwAddress (serialNumber) VALUES (111126);
INSERT INTO hwAddress (serialNumber) VALUES (111127);
INSERT INTO hwAddress (serialNumber) VALUES (111128);
INSERT INTO hwAddress (serialNumber) VALUES (111129);

INSERT INTO hwAddress (serialNumber) VALUES (995346);
INSERT INTO hwAddress (serialNumber) VALUES (553123);
INSERT INTO hwAddress (serialNumber) VALUES (123456);
INSERT INTO hwAddress (serialNumber) VALUES (999999);
INSERT INTO hwAddress (serialNumber) VALUES (112911);
