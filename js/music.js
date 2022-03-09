var isPlaying = false;
var mnd= new Audio("../Audio/deathSound.mp3");
var a=document.getElementById("music");
let music = () => {
  if (document.getElementById("musicCheck").checked) {
    isPlaying = true;
    mnd.play();
    document.getElementById("music").src = "audio/DoomMusic.mp3";
    document.getElementById("home").className =
      "animate__animated animate__shakeX animate__infinite animate_faster animate__delay-1s";
    document.getElementById("maze").className = "";
    console.log(isPlaying);
  } else{
    
    console.log(isPlaying);
    mnd.pause();
    document.getElementById("music").src = "audio";
    document.getElementById("home").className = "";
    document.getElementById("maze").className = "";
    isPlaying = false;
  }
};
