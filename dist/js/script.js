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
    const toTop=document.querySelector('#toTop');

    if (window.pageYOffset > fixNav){
        header.classList.add('navbar-fix');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    }else{
        header.classList.remove('navbar-fix');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}

//klik diluar hamburger menu

window.addEventListener('click',function(e){
    if(e.target != hamburger && e.target != navMenu){
        hamburger.classList.remove('hamburger-on');
        navMenu.classList.add('hidden');
    }
})

//dark mode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click',function(){
    if(darkToggle.checked){
        html.classList.add('dark');
        localStorage.theme='dark';
    }else{
        html.classList.remove('dark');
        localStorage.theme='light';
    }
})

//posisi toggle sesua mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
  } else {
    darkToggle.checked = false;
  }