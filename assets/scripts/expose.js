// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const jsConfetti = new JSConfetti();
   const audipObj = document.querySelector('audio');
   const imgObj = document.querySelector('img');
   const volume = document.getElementById('volume');
   const elemImg = document.getElementById('horn-select');
   const elmAudio = document.querySelector('button');
   const elemVolume = document.getElementById('volume-controls');
   var img1 = 'assets/images/air-horn.svg';
   var audio1 = 'assets/audio/air-horn.mp3';
   var img2 = 'assets/images/car-horn.svg';
   var audio2 = 'assets/audio/car-horn.mp3';
   var img3 = 'assets/images/party-horn.svg';
   var audio3 = 'assets/audio/party-horn.mp3';
   var volume1 = 'assets/icons/volume-level-0.svg';
   var volume2 = 'assets/icons/volume-level-1.svg';
   var volume3 = 'assets/icons/volume-level-2.svg';
   var volume4 = 'assets/icons/volume-level-3.svg';
  
  elemImg.addEventListener('change', function() {
    if(elemImg.value == 'air-horn') {
      imgObj.src = img1;
      audipObj.src = audio1;  
    }
    else if(elemImg.value == 'car-horn') {
      imgObj.src = img2;
      audipObj.src = audio2;  
    }
    else if(elemImg.value == 'party-horn') {
      imgObj.src = img3;
      audipObj.src = audio3;  
    }
  }); 
  
  elmAudio.addEventListener('click', function() {
    if(elemImg.value == 'party-horn') {
     jsConfetti.addConfetti({
      emojis: ['🦄','💪','🎃','👨‍💻','🚀','⏳','💁','👌','🎍','😍','❓','💩','⏳','🎳','😉','🔥','🎉','🌈', '⚡️', '💥', '✨', '💫', '🌸'],
      emojiSize: 50,
      confettiNumber: 250,
      })
    }
    audipObj.play();
  });
  //volume adjustment settup
  volume.addEventListener('change', function() {
  if (volume.value == 0){
    elemVolume.querySelector('img').src = volume1;
    audipObj.volume = 0;
  }
  else if (volume.value >= 1 && volume.value < 33){
    elemVolume.querySelector('img').src =volume2;
    var newValue1 = volume.value *0.01;
    audipObj.volume = newValue1;
  }
  else if (volume.value >= 33 && volume.value < 67){
    elemVolume.querySelector('img').src =volume3;
    var newValue2 = volume.value *0.01;
    audipObj.volume = newValue2;
  }
  else if (volume.value >= 67){
    elemVolume.querySelector('img').src =volume4;
    var newValue3 = volume.value *0.01;
    audipObj.volume = newValue3;
  }
  });
}