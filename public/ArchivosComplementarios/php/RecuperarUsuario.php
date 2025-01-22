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
    die("Conexión fallida: " . $conn->connect_error);
}

// Recibir datos por POST
$id_usuario = $_POST['id']; // Recibir el ID del usuario por POST

// Consulta SQL para obtener todos los datos del usuario con el ID especificado
$sql = "SELECT * FROM usuarios WHERE id = ?"; // Cambia 'usuarios' por el nombre correcto de tu tabla

// Preparar la sentencia SQL
$stmt = $conn->prepare($sql);
$stmt->bind_param('i', $id_usuario); // Enlazar el parámetro (entero)

// Ejecutar la consulta
$stmt->execute();

// Obtener el resultado
$result = $stmt->get_result();

// Verificar si el usuario existe
if ($result->num_rows > 0) {
    $usuario = $result->fetch_assoc(); // Obtener los datos del usuario en un arreglo asociativo
    echo json_encode(["mensaje" => "Exito", "usuario" => $usuario]); // Devolver todos los datos del usuario
} else {
    echo json_encode(["mensaje" => "Usuario no encontrado"]);
}

// Cerrar la conexión
$stmt->close();
$conn->close();
?>
