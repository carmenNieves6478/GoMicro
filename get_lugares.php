<?php
header('Content-Type: application/json');
require_once 'config.php'; // No debe generar salida directa

try {
    $stmt = $conn->prepare("SELECT DISTINCT lugar FROM routes");
    $stmt->execute();
    $lugares = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($lugares); // Devuelve solo el JSON
} catch (Exception $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Error en la consulta: ' . $e->getMessage()
    ]);
}
?>
