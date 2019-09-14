drop database if exists burgers_db;

create database burgers_db;

use burgers_db;

drop table burgers ;
create table burgers (
    id int(11) auto_increment not null,
    burger_name varchar(100) not null,
    devoured boolean default false,
    primary key(id)
);
