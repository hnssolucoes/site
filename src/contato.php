<?php
// Verifica se o formulário foi enviado via POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // Coleta os dados enviados
    $nome = htmlspecialchars($_POST['Nome']);
    $email = htmlspecialchars($_POST['Email']);
    $mensagem = htmlspecialchars($_POST['Mensagem']);

    // Opcional: enviar e-mail com os dados
    $para = "você@seudominio.com"; // Troque para seu e-mail
    $assunto = "Nova mensagem de contato do site";
    $corpo = "Nome: $nome\nEmail: $email\nMensagem:\n$mensagem";

    // Envia o e-mail
    if (mail($para, $assunto, $corpo)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Erro ao enviar a mensagem.";
    }

} else {
    // Se não for POST, retorna erro 405
    http_response_code(405);
    echo "Método não permitido.";
}
?>
