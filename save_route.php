<?php
header('Content-Type: application/json');
require_once 'config.php'; // Archivo de configuración de la conexión

try {
    // Obtener los datos enviados desde el frontend
    $data = json_decode(file_get_contents('php://input'), true);

    $nombreRuta = $data['nombre'] ?? '';
    $puntoInicio = $data['punto_inicio'] ?? '';
    $puntoFin = $data['punto_fin'] ?? '';
    $coordenadas = $data['coordenadas'] ?? '';
    $referencia = $data['referencia'] ?? '';
    $nombreLugar = $data['nombre_lugar'] ?? ''; // El lugar se guarda directamente en la tabla routes

    // Validar los datos requeridos
    if (!$nombreRuta || !$puntoInicio || !$puntoFin || !$coordenadas || !$nombreLugar) {
        echo json_encode([
            'success' => false,
            'message' => 'Todos los campos son obligatorios'
        ]);
        exit;
    }

    // Insertar la nueva ruta en la tabla routes
    $stmt = $conn->prepare("INSERT INTO routes (nombre, punto_inicio, punto_fin, coordenadas, referencia, lugar) VALUES (:nombre, :punto_inicio, :punto_fin, :coordenadas, :referencia, :lugar)");
    $stmt->bindParam(':nombre', $nombreRuta, PDO::PARAM_STR);
    $stmt->bindParam(':punto_inicio', $puntoInicio, PDO::PARAM_STR);
    $stmt->bindParam(':punto_fin', $puntoFin, PDO::PARAM_STR);
    $stmt->bindParam(':coordenadas', $coordenadas, PDO::PARAM_STR);
    $stmt->bindParam(':referencia', $referencia, PDO::PARAM_STR);
    $stmt->bindParam(':lugar', $nombreLugar, PDO::PARAM_STR);
    $stmt->execute();

    echo json_encode([
        'success' => true,
        'message' => 'Ruta guardada exitosamente'
    ]);
} catch (Exception $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Error al guardar la ruta: ' . $e->getMessage()
    ]);
}
?>
