const botaoTema = document.getElementById("tema-btn");
const botaoIdioma = document.getElementById("idioma-btn");

const listas = document.querySelectorAll(".lista-slider");
const btnDireita = document.getElementById("slider-direita");
const btnEsquerda = document.getElementById("slider-esquerda");
const tituloLista = document.getElementById("titulo-lista-slider");
const containerIndicadores = document.getElementById("slider-indicadores");

let listaAtual = 0;
let idiomaAtual = "pt";

// Inicializa os indicadores dinamicamente baseado na quantidade de slides
listas.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.classList.add("indicador-dot");
    if (index === 0) dot.classList.add("ativo");
    dot.setAttribute("aria-label", `Slide ${index + 1}`);
    dot.addEventListener("click", () => {
        listaAtual = index;
        mostrarLista();
    });
    containerIndicadores.appendChild(dot);
});

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

    // Atualiza o estado visual das bolinhas (dots)
    const dots = containerIndicadores.querySelectorAll(".indicador-dot");
    dots.forEach((dot, index) => {
        if (index === listaAtual) {
            dot.classList.add("ativo");
        } else {
            dot.classList.remove("ativo");
        }
    });

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
