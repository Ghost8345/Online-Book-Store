create schema testdb;

create table testdb.publisher
(
    id           int auto_increment primary key,
    name         varchar(50) NOT NULL,
    address      varchar(100),
    phone        varchar(20)
);

create table testdb.book
(
    isbn int auto_increment primary key,
    title varchar(50) NOT NULL,
    copiesNum int NOT NULL,
    publisherId int NOT NULL,
    price float NOT NULL CHECK (price >=0),
    foreign key (publisherId) references testdb.publisher(id) on update cascade
);