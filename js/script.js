function myFunction() {

  // Copy the text inside the text field
  navigator.clipboard.writeText("4790483435");
  
  // Alert the copied text
  //alert("Ingin menyalin nomor rekening?");
}

function myFunction1() {
  
  // Copy the text inside the text field
  navigator.clipboard.writeText("026101088836500");

  // Alert the copied text
  //alert("Ingin menyalin nomor rekening?");
}

const PlayPause = document.getElementById('play-pause');
const Mute = document.getElementById('mute');
const Audio = document.querySelector('audio ');

let song_Playing = true;

function putarAudio(){
  song_Playing = true;
  Audio.play();
  PlayPause.classList.add('active');

  // nampilin ikon
  PlayPause.innerHTML = '<ion-icon name="pause-circle-outline"></ion-icon>';
}

function stopAudio(){
  song_Playing = false;
  Audio.pause();
  PlayPause.classList.remove('active');

  //gaanti ikonnya
  PlayPause.innerHTML = '<ion-icon name="play-circle-outline"></ion-icon>';
}

//tombol play pause
PlayPause.addEventListener("click",() => (song_Playing ? stopAudio() : putarAudio()));


//tombol mute
Mute.addEventListener("click",fMute);

function fMute(){
  if(Audio.muted){
    Audio.muted = false;
    //gaanti ikonnya
    Mute.innerHTML = '<ion-icon name="volume-high-outline"></ion-icon>';
  }
  else{
    Audio.muted = true;
    // nampilin ikon
    Mute.innerHTML = '<ion-icon name="volume-mute-outline"></ion-icon>';
  }
}
