function push() {
    var e = document.querySelector("aside");
    e.classList.toggle("open");
}

function alert() {
    var e = document.querySelector("aside");
    e.classList.toggle("alert");
}

var nav = document.createElement('nav');

nav.innerHTML = `
    <a href="home" class="logo">
        <img src="src/fenodol-logo.png" alt="Fenodol">
    </a>
    <a href="premios" class="link">
        <i class="fa-regular fa-hashtag"></i>
        ABC123-XYZ789
    </a>
    <a onclick="alert()" class="link">
        <i class="fa-regular fa-coins"></i>
        500 Puntos
    </a>
    <a href="index" class="link">
        <i class="fa-solid fa-arrow-right-from-bracket"></i>
        Cerrar Sesión
    </a>
    <a href="premios" class="profile">A</a>
`;

var footer = document.createElement('footer');

footer.innerHTML = `
    <span>© 2024 Fenodol</span>
    <a href="#">Términos y Condiciones</a>
    <a href="#">Políticas de Privacidad</a>
    <a href="#">Registrar facturas</a>
`;

document.body.appendChild(nav);
document.body.appendChild(footer);

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}