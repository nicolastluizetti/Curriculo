const botaoTema = document.getElementById("tema-btn");
const botaoIdioma = document.getElementById("idioma-btn");

const listas = document.querySelectorAll(".lista-slider");
const btnDireita = document.getElementById("slider-direita");
const btnEsquerda = document.getElementById("slider-esquerda");
const tituloLista = document.getElementById("titulo-lista-slider");

let listaAtual = 0;
let idiomaAtual = "pt";

botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        botaoTema.textContent = idiomaAtual === "pt" ? "Modo Claro" : "Light Mode";
    } else {
        botaoTema.textContent = idiomaAtual === "pt" ? "Modo Escuro" : "Dark Mode";
    }
});

function atualizarTituloSlider() {
    const listaAtiva = listas[listaAtual];

    if (idiomaAtual === "pt") {
        tituloLista.textContent = listaAtiva.dataset.tituloPt;
    } else {
        tituloLista.textContent = listaAtiva.dataset.tituloEn;
    }
}

function mostrarLista() {
    listas.forEach((lista) => {
        lista.classList.remove("ativa");
    });

    listas[listaAtual].classList.add("ativa");
    atualizarTituloSlider();
}

btnDireita.addEventListener("click", () => {
    listaAtual++;

    if (listaAtual >= listas.length) {
        listaAtual = 0;
    }

    mostrarLista();
});

btnEsquerda.addEventListener("click", () => {
    listaAtual--;

    if (listaAtual < 0) {
        listaAtual = listas.length - 1;
    }

    mostrarLista();
});

botaoIdioma.addEventListener("click", () => {
    idiomaAtual = idiomaAtual === "pt" ? "en" : "pt";

    const elementosTraduzidos = document.querySelectorAll("[data-pt][data-en]");

    elementosTraduzidos.forEach((elemento) => {
        if (idiomaAtual === "pt") {
            elemento.textContent = elemento.dataset.pt;
        } else {
            elemento.textContent = elemento.dataset.en;
        }
    });

    if (idiomaAtual === "pt") {
        botaoIdioma.textContent = "EN";
        botaoTema.textContent = document.body.classList.contains("dark-mode") ? "Modo Claro" : "Modo Escuro";
    } else {
        botaoIdioma.textContent = "PT";
        botaoTema.textContent = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
    }

    atualizarTituloSlider();
});

mostrarLista();
