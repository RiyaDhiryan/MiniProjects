let drop = document.querySelector('.service')
drop.addEventListener('click',function(){
    console.log("clicked")
    let unhide=document.querySelector('.hide')
    unhide.classList.toggle('unhide')
})