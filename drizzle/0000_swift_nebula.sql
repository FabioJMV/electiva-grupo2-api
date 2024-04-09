CREATE TABLE `producto` (
	`codigo` varchar(10) NOT NULL,
	`nombre` varchar(50) NOT NULL,
	`descripcion` varchar(255) NOT NULL,
	`cantidad` int NOT NULL,
	`precio` decimal(10,2) NOT NULL,
	CONSTRAINT `producto_codigo` PRIMARY KEY(`codigo`)
);
