CREAT DATABASE user_managment ;
USE user_managment;

CREAT TABLE users (
    id PRIMARY KEY AUTO_INCREMENT,
    firstName varchar(50),
    lastName varchar(50),
    email varchar(100) uniqe,
    password varchar(255) 
);

