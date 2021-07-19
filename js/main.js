const menuToggle = document.querySelector("#menu-toggle");
const menu = document.querySelector('.sidebar');

menuToggle.addEventListener('click', function (event) {
    menu.classList.toggle("visible")
})