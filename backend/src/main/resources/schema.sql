create schema testdb;

create table testdb.publisher
(
    id int auto_increment primary key,
    name         varchar(50),
    address      varchar(100),
    phone        varchar(20)
);

CREATE TABLE testdb.book(
                            ISBN INT,
                            title VARCHAR(100) UNIQUE,
                            publisherId INT NOT NULL,
                            authors VARCHAR(500) NOT NULL,
                            publicationYear CHAR(4),
                            price float NOT NULL,
                            CONSTRAINT PRICE_RANGE CHECK (PRICE >= 0),
                            category ENUM('Science','Art','Religion','History','Geography') NOT NULL,
                            threshold INT NOT NULL,
                            stockQuantity INT NOT NULL,
                            CONSTRAINT THRESHOLD_RANGE CHECK (threshold >= 0),
                            CONSTRAINT BPK
                                PRIMARY KEY(ISBN),
                            CONSTRAINT PUBFK
                                FOREIGN KEY(publisherId) REFERENCES PUBLISHER(id)
                                    ON UPDATE CASCADE ON DELETE RESTRICT
);