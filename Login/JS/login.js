const formulario = document.querySelector(".login-form");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const usuario = document.getElementById("username").value;
    const senha = document.getElementById("password").value;

    if (usuario === "AdmRover" && senha === "1234") {
        window.location.href = "../../servicePage/HTML/servicePage.html";
    } else {
        alert("Usuário ou senha inválidos!");
    }
});