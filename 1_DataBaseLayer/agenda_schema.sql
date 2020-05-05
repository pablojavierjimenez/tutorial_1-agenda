create database if not exists agenda;
use agenda;
create table if not exists agenda(
    id bigint unsigned not null auto_increment,
    full_names varchar(100) not null,
    direction varchar(255) not null,
    house_phone varchar(100) not null,
    mobile_phone varchar(100) not null,
    email varchar(200) not null,
    primary key(id)
);
