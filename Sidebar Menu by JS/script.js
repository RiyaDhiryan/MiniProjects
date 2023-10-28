const menu = document.querySelector('.menu');
const left_menu =document.querySelector('.left_menu');
const name = document.querySelector('.logo_name')
menu.addEventListener('click',function(){
    menu.classList.toggle('active');
    if(menu.classList.contains('active')){
        left_menu.style.width = '50px';
    }
    else{
        left_menu.style.width = '200px';
    }
})