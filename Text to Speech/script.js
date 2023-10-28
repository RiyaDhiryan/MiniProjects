const input = document.querySelector('#input');
const speak = document.querySelector('#speak');

speak.addEventListener('click',function(){
    speakText = input.value
    let speech = new SpeechSynthesisUtterance();
    speech.text = speakText;
    speechSynthesis.speak(speech);
})