const botao = document.getElementById("botao");

const campoTexto = document.getElementById("campoTexto");

const lista = document.getElementById("listaElementos");

botao.addEventListener("click", function() {
    const h1 = document.querySelector("h1");
    h1.style.backgroundColor = "red";
});


document.addEventListener("DOMContentLoaded", function() {
    const h1 = document.querySelector("h1");
    h1.textContent = "Olá mundo";
});


campoTexto.addEventListener("keydown", function(event) {
    // Verifica se a tecla pressionada é o "Enter"
    if (event.key === "Enter") {
        console.log(campoTexto.value); // Imprime o valor na consola
        campoTexto.value = ""; // Limpa o campo após pressionar Enter (opcional)
    }
});

lista.addEventListener("click", function(event) {
    // Verifica se o elemento clicado é um <li>
    if (event.target.tagName === "LI") {
        event.target.remove(); // Remove o item clicado
    }
});