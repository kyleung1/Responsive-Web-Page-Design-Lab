let icon = document.getElementsByClassName("icon")[0];

icon.addEventListener('click', responsive_control);

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function responsive_control() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

let video = document.getElementById("space-background");
let pauseBtn = document.getElementById("pauseBtn");

function pauseSpace() {
  if (video.paused) {
    video.play();
    pauseBtn.innerHTML = "Pause Background";
  } else {
    video.pause();
    pauseBtn.innerHTML = "Play Background";
  }
}

console.log(Boolean(10 > 9))