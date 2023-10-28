const write = document.querySelector('#write')
const char = document.querySelector('#char')
const word = document.querySelector('#word')

// write.addEventListener('input',()=>{
//   // count number of character
//   char.textContent = write.value.length + ' char';
//   // Remove Whitespace 
//   let txt = write.value.trim();
//   // to remover extra space
//   word.textContent = txt.split(/\s+/g).filter((item)=> item).length + ' word';
// })

// Another Way
write.addEventListener('input',()=>{
  char.innerHTML = write.value.length + ' char'
  word.innerHTML = write.value.replace(/\s+/g," ").trim().split(' ').length + ' word'

  let space = write.value.split(" ");
  if(space[0]==""){
    word.innerHTML = 0+' word'
  }
})