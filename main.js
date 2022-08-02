const ham = document.querySelector('.ham');
const links = document.querySelector('.menu-links');
const bars = document.querySelectorAll('.ham span');


ham.addEventListener('click', () => {
    links.classList.toggle('activate');
    bars.forEach(child => {child.classList.toggle('animated')});
});