const bar = document.querySelector('.bar');
const list = document.querySelector('.main_container');
const side = document.querySelector('.right-side');
const gaps = document.querySelector('.recent');
const join = document.querySelector('join');
bar.addEventListener('click',function(){
    bar.classList.toggle('active');
    if(bar.classList.contains('active')){
        list.style.width = '230px';
          bar.style.marginLeft ='250px';
          side.style.marginLeft = '250px';
          side.style.width = '85vw';
          gaps.style.gap = '80px';
          join.style.marginLeft = '250px'

    }
    else{
        list.style.width = '0px';
        bar.style.marginLeft = '10px';
        side.style.width = '100vw';
        side.style.marginLeft='0px';
        gaps.style.gap = '130px';
        join.style.marginLeft = '350px'
    }
    
})