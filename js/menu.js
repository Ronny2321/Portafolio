const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', () => {
    menu.classList.toggle('show');
});

const links = document.querySelectorAll('#menu li a');
links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('show');
    });
});
