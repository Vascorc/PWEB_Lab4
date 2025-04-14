const botao = document.getElementById("botao");

const campoTexto = document.getElementById("campoTexto");

const lista = document.getElementById("listaElementos");

document.addEventListener("DOMContentLoaded", function() {
    const h1 = document.querySelector("h1");
    h1.textContent = "Olá mundo";
});

botao.addEventListener("click", function() {
    const h1 = document.querySelector("h1");
    h1.textContent = "Botão Clicado";
    h1.style.backgroundColor = "red";
});





campoTexto.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        console.log(campoTexto.value); 
        campoTexto.value = ""; 
    }
});

lista.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        event.target.remove(); 
    }
});