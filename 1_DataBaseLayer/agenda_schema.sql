--
-- Base de datos: `agendaDB`
--
create database if not exists agendaDB;

use agendaDB;
---------------------------

--
-- Estructura de tabla para la tabla `persons`
--
CREATE TABLE `persons` (
  `id` bigint unsigned not null auto_increment,
  `name` varchar(100) NOT NULL,
  `direction` varchar(255) NOT NULL,
  `housePhone` varchar(100) NOT NULL,
  `mobilePhone` varchar(100) NOT NULL,
  `email` varchar(200) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  primary key(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
