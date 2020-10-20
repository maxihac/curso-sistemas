-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-10-2020 a las 20:57:39
-- Versión del servidor: 10.4.13-MariaDB
-- Versión de PHP: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `abm`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `username` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL,
  `name` varchar(64) NOT NULL,
  `surname` varchar(64) NOT NULL,
  `email` varchar(64) NOT NULL,
  `phone_number` varchar(32) NOT NULL,
  `country` varchar(32) NOT NULL,
  `address` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`username`, `password`, `name`, `surname`, `email`, `phone_number`, `country`, `address`) VALUES
('AAAAAAAAAAA', 'BBBBBBBBB', 'CCCCCCCCCCC', 'DDDDDDDD', 'MMMMMMM@djbdskj', 'hjkbjkj', 'jbk ', 'jkh'),
('ana', '$$$$$junasAAAj9988989', 'jkdkjd', 'jkdnbkjs', 'jkkjx@jldsbnkjds', 'knasdljdcn', 'kjndls', 'klndsl'),
('dsjkdssdbksd', 'Pa$$word1234', 'Juan', 'García', 'email@email.com', '12345678', 'Argentina', 'Av. Falsa 123'),
('jjjjjjjjjjjjjjj', '$$$$mmmmMMMM778887', 'erfg', 'sd', 'erf@sdfg', 'werf', 'df', 'erf'),
('jodccdijanb', 'hjbubKJHJK7998$%$$%#%', 'ndkbjkh', 'wedfredv', 'wedrf@sdfg', '234erf', 'sdf', 'serfg'),
('juan', '$$juan123456', 'Juan', 'García', 'email@email.com', '12345678', 'Argentina', 'Av. Falsa 123'),
('juan1237777', 'Pa$$word1234', 'Juan', 'García', 'email@email.com', '12345678', 'Argentina', 'Av. Falsa 123'),
('juan123hhh', 'Pa$$word1234', 'Juan', 'García', 'email@email.com', '12345678', 'Argentina', 'Av. Falsa 123'),
('juan888888888', '$$juanJJJ8888', 'vvvv', 'gggg', 'hh@jbdskjds', '3738', 'nbds', 'hjbd'),
('juanhhhh', '$$$$tyuiHHHG7876', 'sdf', 'xdf', 'maxi@ddk', 'wd', 'ed', 'def'),
('juannnnnn', 'PPPPoooo98776&&&', 'sdf', 'zxc', 'zxdf@wefg', 'asdf', 'sdf', 'sdf'),
('juanxxxxxxxxxxxx', 'jau¿¿¿$%%&/56778FGH', 'xdfv', 'xcv', 'xcv@dfgh', 'zsdf', 'sdf', 'xcv'),
('pwpwppwpw', 'Pa$$word1234', 'Juan', 'García', 'email@email.com', '12345678', 'Argentina', 'Av. Falsa 123');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`username`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
