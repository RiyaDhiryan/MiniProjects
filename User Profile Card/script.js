const heart = document.querySelector('#heart')
heart.addEventListener('click',()=>{
    heart.classList.toggle('fa-solid')
    if(heart.classList == 'fa-regular fa-heart fa-solid'){
        heart.style.color ='red'
    }
    else{
        heart.style.color='white'
    }   
})