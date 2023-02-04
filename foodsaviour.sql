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
GRANT ALL PRIVILEGES ON foodsaviour.* TO 'admin'@'  ocalhost';
FLUSH PRIVILEGES;

CREATE TABLE tracker (
Category    varchar(255),
Description varchar(255),
Quantity    Int(55),
Qunits      varchar(255),
amountToClients    Int(55), 
amountToAFeed      Int(55),
amountToCompost    Int(55), 
amountToPartNet    Int(55),
amountToLandfill   Int(55),
percentClients     Int(55), 
percentAFeed       Int(55), 
percentCompost     Int(55),  
percentPartNet     Int(55), 
percentLandfill    Int(55)
);

CREATE TABLE `permissions` (
  `role` varchar(255) DEFAULT NULL,
  `metrics` varchar(255) DEFAULT NULL,
  `network` varchar(255) DEFAULT NULL,
  `readwrite` varchar(255) DEFAULT NULL
) 


CREATE TABLE posts(
product varchar(255),
Type varchar(255),
Quantity int,
Units varchar(3),
Description varchar(255)
);

CREATE TABLE Comments(

product varchar(255),
Type varchar(255),
Quantity int,
Units varchar(3),
Description varchar(255),
Comments varchar(255),
username varchar(255)

);
