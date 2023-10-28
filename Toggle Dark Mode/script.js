const sun = document.querySelector('.fa-sun');
const moon = document.querySelector('.fa-moon');

moon.addEventListener('click',()=>{
    document.body.style.backgroundColor ="black";
})
sun.addEventListener('click',()=>{
    document.body.style.backgroundColor ="white";
})