CREATE SCHEMA foodsaviour;
USE foodsaviour;
CREATE TABLE users (
 FirstName varchar(255),
 LastName varchar(255),
 Email varchar(255),
 Password varchar(255),
 Roles varchar(255),
 Consent varchar(50)
);
CREATE USER 'admin'@'localhost' IDENTIFIED BY 'groupb@2022!';
GRANT ALL PRIVILEGES ON foodsaviour.* TO 'admin'@'localhost';
FLUSH PRIVILEGES;

CREATE TABLE inventory (
Description varchar(255),
Category	varchar(255),
Quantity	Int(55)
);