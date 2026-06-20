const toggle = document.getElementById("tema-toggle");

toggle.addEventListener("change", () => {
    document.body.classList.toggle("modo-escuro");
});

const audioClick = new Audio('./assets/click.mp3');

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        audioClick.currentTime = 0;
        audioClick.play();
    });
