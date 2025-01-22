<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// Configuración de la base de datos
$host = 'localhost';  // o tu servidor de base de datos
$usuario = 'javi';    // tu nombre de usuario de MySQL
$contraseña = 'javi';     // tu contraseña de MySQL
$base_datos = 'circuitos';  // nombre de tu base de datos

// Crear la conexión
$conn = new mysqli($host, $usuario, $contraseña, $base_datos);

// Verificar la conexión
if ($conn->connect_error) {
    die(json_encode(["mensaje" => "Conexión fallida: " . $conn->connect_error]));
}

// Recibir datos por POST
$id = $_POST['id'];  // Nombre de usuario
$circuito = $_POST['circuito'];    // Nombre completo del usuario
$tiempo = $_POST['tiempo'];      // Correo electrónico
// $id = 1;  // Nombre de usuario
// $circuito = 'Circuito de Mónaco';    // Nombre completo del usuario
// $tiempo = '01:10';  

// Consulta SQL para insertar el nuevo usuario
$sql = "INSERT INTO tiempos (id_usuario, nombre_circuito, tiempo) VALUES (?, ?, ?)";

// Preparar la sentencia SQL
$stmt = $conn->prepare($sql);
$stmt->bind_param('sss', $id, $circuito, $tiempo);

// Ejecutar la consulta
if ($stmt->execute()) {
    echo json_encode(["mensaje" => "Usuario creado exitosamente"]);
} else {
    echo json_encode(["mensaje" => "Error al crear el usuario", "error" => $stmt->error]);
}

// Cerrar la conexión
$stmt->close();
$conn->close();
?>