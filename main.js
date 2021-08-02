const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show')
})
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show')
});

//navbar effect scroll
window.addEventListener('scroll', function(){
    const header = document.querySelector("header");
    header.classList.toggle('', window.scrollY > 0)
});

//animation script
var typed = new Typed(".typing", {
    strings: ["Start2Impact student", "Front-end Developer"],
    typeSpeed:100,
    backSpeed:60,
    loop: true
});