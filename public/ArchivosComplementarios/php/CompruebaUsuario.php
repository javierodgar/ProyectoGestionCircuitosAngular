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
$nombre_usuario = $_POST['usuario'];  // Ahora es 'usuario' en lugar de 'nombre_usuario'
$contrasena = $_POST['contrasena'];

// Consulta SQL para verificar si el usuario existe
$sql = "SELECT id, contrasena FROM usuarios WHERE usuario = ?";  // Cambié 'Usuarios' por 'usuarios' y 'id_usuario' por 'id'

// Preparar la sentencia SQL
$stmt = $conn->prepare($sql);
$stmt->bind_param('s', $nombre_usuario);

// Ejecutar la consulta
$stmt->execute();

// Obtener el resultado
$stmt->store_result();
$stmt->bind_result($id_usuario, $contrasena_guardada);

// Verificar si el usuario existe
if ($stmt->num_rows > 0) {
    $stmt->fetch();
    
    // Verificar si la contraseña es correcta 
    if ($contrasena === $contrasena_guardada) {
        echo json_encode(["mensaje" => "Exito", "id" => $id_usuario]);
    } else {
        echo json_encode(["mensaje" => "Contraseña incorrecta"]);
    }
} else {
    echo json_encode(["mensaje" => "Usuario no encontrado"]);
}

// Cerrar la conexión
$stmt->close();
$conn->close();
?>
