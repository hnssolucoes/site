<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nome = $_POST['Nome'] ?? '';
    $email = $_POST['Email'] ?? '';
    $mensagem = $_POST['Mensagem'] ?? '';

    // Aqui você pode fazer validações e processar os dados

    // Depois redireciona
    header("Location: coisa.html");
    exit;
} else {
    // Se tentar acessar via GET, mostra erro
    http_response_code(405);
    echo "Método não permitido.";
}
?>
