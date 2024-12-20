<?php
header('Content-Type: application/json');
require_once 'config.php';

try {
    $data = json_decode(file_get_contents('php://input'), true);
    
    $lugar = $data['lugar'];
    $destino = $data['destino'];
    $referencia = $data['referencia'];

    // Mostrar valores recibidos para depuración
    error_log("LUGAR: $lugar, DESTINO: $destino, REFERENCIA: $referencia"); // Agrega un log

    // Consulta SQL para buscar rutas por lugar
    $stmt = $conn->prepare("SELECT * FROM routes WHERE lugar = :lugar 
                            AND (punto_inicio LIKE :destino OR punto_fin LIKE :destino)
                            AND (referencia LIKE :referencia)");
    
    $stmt->execute([
        ':lugar' => $lugar,
        ':destino' => "%$destino%",
        ':referencia' => "%$referencia%"
    ]);

    $routes = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($routes);
} catch (Exception $e) {
    echo json_encode([
        'success' => false,
        'message' => $e->getMessage()
    ]);
}
?>
