const submit = document.querySelector('.submit');
const ok = document.querySelector('.ok')
const PopUp = document.querySelector('.PopUp')

submit.addEventListener('click',function(){
    console.log("Clicked")
    PopUp.classList.add('popupActive')
})
ok.addEventListener('click',function(){
    PopUp.classList.remove('popupActive')
})
