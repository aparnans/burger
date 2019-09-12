drop database if exists burgers_db;

use burgers_db;

create table burgers (
    id int(11) not null,
    burger_name varchar(100) not null,
    devoured boolean default false,
    primary key(id)
);
