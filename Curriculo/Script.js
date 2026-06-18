const botao = document.getElementById("tema-btn");

botao.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        botao.textContent = "Modo Claro";
    } else {
        botao.textContent = " Modo Escuro";
    }
});