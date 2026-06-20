const toggle = document.getElementById("tema-toggle");

toggle.addEventListener("change", () => {
    document.body.classList.toggle("modo-escuro");
});
