const formulario = document.querySelector(".formulario-avaliacao");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.querySelector(".input-nome").value;
    const comentario = document.querySelector(".textarea-comentario").value;

    const notaSelecionada = document.querySelector('input[name="nota"]:checked');

    if (!notaSelecionada) {
        alert("Selecione uma quantidade de estrelas.");
        return;
    }

    const nota = Number(notaSelecionada.value);

    const dataAtual = new Date().toLocaleDateString("pt-BR");

    let estrelas = "";

    for (let i = 0; i < nota; i++) {
        estrelas += "★";
    }

    for (let i = nota; i < 5; i++) {
        estrelas += "☆";
    }

    const novoComentario = document.createElement("div");

    novoComentario.classList.add("item-comentario");

    novoComentario.innerHTML = `
        <div class="topo-comentario">
            <div class="usuario-info">
                <div class="avatar-usuario">${nome.charAt(0).toUpperCase()}</div>
                <span class="nome-usuario">${nome}</span>
            </div>
            <span class="data-comentario">${dataAtual}</span>
        </div>

        <div class="estrelas-comentario">
            <span class="estrelas-ativas">${estrelas}</span>
        </div>

        <p class="texto-comentario">${comentario}</p>
    `;

    listaComentarios.prepend(novoComentario);

    formulario.reset();
});