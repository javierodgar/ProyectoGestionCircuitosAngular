<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
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
//$id_usuario = $_POST['id']; // Recibir el ID del usuario por POST
$id_usuario = 1;
// Consulta SQL para obtener los tiempos y circuitos asociados al ID del usuario
$sql = "SELECT tiempo, nombre_circuito, fecha
        FROM tiempos
        WHERE id_usuario = ?;";

// Preparar la sentencia SQL
$stmt = $conn->prepare($sql);
$stmt->bind_param('i', $id_usuario); // Enlazar el parámetro (entero)

// Ejecutar la consulta
$stmt->execute();

// Obtener el resultado
$result = $stmt->get_result();

// Verificar si el usuario tiene tiempos registrados
if ($result->num_rows > 0) {
    $tiempos = []; // Crear un array para almacenar los tiempos

    // Recorrer los resultados y agregar cada tiempo al array
    while ($row = $result->fetch_assoc()) {
        $tiempos[] = [
            'tiempo' => $row['tiempo'],
            'nombre_circuito' => $row['nombre_circuito'],
            'fecha' => $row['fecha']
        ];
    }

    // Devolver los tiempos en formato JSON
    echo json_encode(["mensaje" => "Exito", "tiempos" => $tiempos]);
} else {
    echo json_encode(["mensaje" => "No se encontraron tiempos para el usuario"]);
}

// Cerrar la conexión
$stmt->close();
$conn->close();
?>
