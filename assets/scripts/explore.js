// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const speechSynthesisElement = window.speechSynthesis;
    setTimeout(100);
    setTimeout(
      function(){
        const voices = window.speechSynthesis.getVoices();

        for (let i = 0; i < voices.length; i++) {
          let option = document.createElement('option');
          option.textContent = `${voices[i].name} (${voices[i].lang})`;
          document.getElementById('voice-select').appendChild(option);
        }

        document.querySelector('button').addEventListener('click', function(){
          let textToVoice = new SpeechSynthesisUtterance(document.getElementById('text-to-speak').value);
          textToVoice.voice = voices[document.getElementById('voice-select').selectedIndex];
          speechSynthesisElement.speak(textToVoice);
          setInterval(function(){
            setInterval(function() {
              if (speechSynthesisElement.speaking) {
                document.querySelector('img').src = 'assets/images/smiling-open.png';
              }
            },0.2)
              setInterval(function(){
                if (speechSynthesisElement.speaking){
                document.querySelector('img').src = 'assets/images/smiling.png';
                }},0.2)
          }, 0.2)
          if (!speechSynthesisElement.speaking) {
            document.querySelector('img').src = 'assets/images/smiling.png';
          }
        })
      }, 200);
}