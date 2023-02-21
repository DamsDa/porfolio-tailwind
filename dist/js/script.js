// hamburger

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-on');
    navMenu.classList.toggle('hidden');
});

//navbar fix

window.onscroll= function(){
    const header= document.querySelector('header');
    const fixNav=header.offsetTop;

    if (window.pageYOffset > fixNav){
        header.classList.add('navbar-fix');
    }else{
        header.classList.remove('navbar-fix');
    }
}