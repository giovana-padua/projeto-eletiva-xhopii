function redirecionarHome() {
    if (document.getElementById('entrar_log').id === "entrar_log") {
        window.location.href = "assets/view/homepage.html";
    }
}

function redirecionarLogin() {
    if (document.getElementById('enviar_redsenha').id === "enviar_redsenha") {
        window.location.href = "../../index.html";
    }
}