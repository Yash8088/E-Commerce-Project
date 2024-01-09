// Script for navigation bar

//get each element by their ID in html code
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar')

//check if click on bar, then drag out navbar

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}


//check if click on x, then close the navbar
if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}