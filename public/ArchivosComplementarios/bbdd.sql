-- Crear la base de datos
CREATE DATABASE circuitos;
USE circuitos;

-- Tabla de usuarios
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(50) NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    contrasena VARCHAR(255) NOT NULL
);

-- Modificar la tabla tiempos para almacenar el nombre del circuito en lugar del id
CREATE TABLE tiempos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    nombre_circuito VARCHAR(255) NOT NULL,
    tiempo VARCHAR(50) NOT NULL,
    fecha DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

-- Insertar los usuarios
INSERT INTO usuarios (usuario, nombre, email, contrasena) 
VALUES 
    ('daw', 'Juan Pérez', 'juan.perez@example.com', 'daw'),
    ('daq', 'Ana García', 'ana.garcia@example.com', 'daq'),
    ('dae', 'Luis Gómez', 'luis.gomez@example.com', 'dae');

-- Insertar los tiempos con el nombre del circuito en lugar del id
INSERT INTO tiempos (id_usuario, nombre_circuito, tiempo) VALUES
(1, 'Circuito de Mónaco', 1.23),   -- Juan Pérez, Circuito de Mónaco, 1:23
(1, 'Circuito de Silverstone', 1.45),   -- Juan Pérez, Circuito de Silverstone, 1:45
(1, 'Circuito de Suzuka', 1.30),   -- Juan Pérez, Circuito de Suzuka, 1:30
(2, 'Circuito de Silverstone', 1.40),   -- Ana García, Circuito de Silverstone, 1:40
(2, 'Circuito de Spa-Francorchamps', 1.50),   -- Ana García, Circuito de Spa-Francorchamps, 1:50
(3, 'Circuito de Mónaco', 1.35),   -- Luis Gómez, Circuito de Mónaco, 1:35
(3, 'Circuito de Interlagos', 1.33),   -- Luis Gómez, Circuito de Interlagos, 1:33
(1, 'Circuito de Jerez', 1.22),   -- Juan Pérez, Circuito de Jerez, 1:22
(2, 'Circuito del Jarama', 1.55),   -- Ana García, Circuito del Jarama, 1:55
(3, 'Circuito de Hungaroring', 1.48);   -- Luis Gómez, Circuito de Hungaroring, 1:48
