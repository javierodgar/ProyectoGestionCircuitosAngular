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
$usuario = $_POST['usuario'];  // Nombre de usuario
$nombre = $_POST['nombre'];    // Nombre completo del usuario
$email = $_POST['email'];      // Correo electrónico
$contrasena = $_POST['contrasena']; // Contraseña

// Consulta SQL para insertar el nuevo usuario
$sql = "INSERT INTO usuarios (usuario, nombre, email, contrasena) VALUES (?, ?, ?, ?)";

// Preparar la sentencia SQL
$stmt = $conn->prepare($sql);
$stmt->bind_param('ssss', $usuario, $nombre, $email, $contrasena);

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
