CREATE SCHEMA foodsaviour;
USE foodsaviour;

CREATE TABLE users (
 FirstName varchar(255),
 LastName varchar(255),
 Email varchar(255),
 Password varchar(255),
 Roles varchar(255),
 Consent varchar(50),
id  int NOT NULL AUTO_INCREMENT,
Organization varchar(255),
Approve varchar(255)
);
CREATE USER 'admin'@'localhost' IDENTIFIED BY 'groupb@2022!';
GRANT ALL PRIVILEGES ON foodsaviour.* TO 'admin'@'localhost';
FLUSH PRIVILEGES;

CREATE TABLE inventory (
Description varchar(255),
Category	varchar(255),
Quantity	Int(55),
Qunits      varchar(255),
DivertClients    Int(55), 
DivertAFeed      Int(55),
DivertCompost    Int(55), 
DivertPartNet    Int(55),
DivertLandfill   Int(55)
);