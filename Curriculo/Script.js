const toggle = document.getElementById("tema-toggle");

toggle.addEventListener("change", () => {
    document.body.classList.toggle("modo-escuro");
    if (document.body.classList.contains("modo-escuro")) {
        botao.textContent = "Modo Claro";
    } else {
        botao.textContent = "Modo Escuro";
    }
});

const audioClick = new Audio('./assets/click.mp3');

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        audioClick.currentTime = 0;
        audioClick.play();
    });
});

const languageBtn = document.getElementById("language-btn");

let currentLanguage = "pt";

const translations = {
    pt: {
        dados: "Dados pessoais:",

        objetivo: "Objetivo Profissional",

        textosobre:"Busco oportunidade como Desenvolvedor Back-end Java Junior, com foco em Java, Spring Boot, APIs REST e banco de dados. Também possuo interesse em Front-end com HTML e CSS.",
        
        titulo2:"Conhecimento Tecnico"

 
    },

    en: {
        dados:"Personal data",

        objetivo: "Professional goals",
        
        textosobre:"I am seeking an opportunity as a Junior Java Back-end Developer, focusing on Java, Spring Boot, REST APIs, and databases. I am also interested in Front-end development with HTML and CSS.",

        titulo2:"Technical Knowledge"
    }
};

languageBtn.addEventListener("click", () => {

    if (currentLanguage === "pt") {

        currentLanguage = "en";

        document.getElementById("dados").textContent =
            translations.en.dados;

        document.getElementById("objetivo").textContent =
            translations.en.objetivo;

        document.getElementById("textosobre").textContent =
            translations.en.textosobre;

        document.getElementById("titulo2").textContent =
            translations.en.titulo2;

        languageBtn.textContent = "🇧🇷 Português";

    } else {

    currentLanguage = "pt";

    document.getElementById("dados").textContent =
        translations.pt.dados;

    document.getElementById("objetivo").textContent =
        translations.pt.objetivo;

    document.getElementById("textosobre").textContent =
        translations.pt.textosobre;

    document.getElementById("titulo2").textContent =
        translations.pt.titulo2;

    languageBtn.textContent = "🇺🇸 English";
}
});



