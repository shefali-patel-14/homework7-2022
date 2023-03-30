var vid = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });



// page load
vid.autoplay = false;
vid.loop = false;
vid.load;


// play video
var playBtn = document.getElementById("play").addEventListener("click", playVideo);

function playVideo() {
  vid.play();
  document.querySelector("#volume").innerHTML = volSlider.value + "%";
}


// pause video
var pauseBtn = document.getElementById("pause").addEventListener("click", pauseVideo);

function pauseVideo() {
  vid.pause();
}


// slow down video
var slowBtn = document.getElementById("slower").addEventListener("click", slowDownVideo);

function slowDownVideo() {

  if (vid.playbackRate <= 0.5) {
    window.alert("Video is at slowest speed!");
  }

  else {
    vid.playbackRate = vid.playbackRate*(0.95);
  }
  console.log(`New speed: ${vid.playbackRate.toFixed(5)}`);
}


// speed up video
var fastBtn = document.getElementById("faster").addEventListener("click", speedUpVideo);

function speedUpVideo() {

  if (vid.playbackRate >= 2) {
    window.alert("Video is at fastest speed!");
  }

  else {
    vid.playbackRate = vid.playbackRate*(1.05);
  }
  console.log(`New speed: ${vid.playbackRate.toFixed(5)}`);
}


// skip ahead
var skipBtn = document.querySelector("#skip");
skipBtn.addEventListener("click", function() {

  let timeStamp = vid.currentTime;

  if (vid.duration - timeStamp < 15) {
    skipBtn.innerHTML = "Video Restarted";
    vid.pause();
    vid.play();
  }

  else if (vid.duration - timeStamp >= 15) {
    skipBtn.innerHTML = "Skip Ahead";
    timeStamp = timeStamp + 15;
    vid.currentTime = timeStamp;
  }
   
  console.log(`Time Stamp: ${timeStamp}`);

});


// mute video
var muteBtn = document.querySelector("#mute");
muteBtn.addEventListener("click", muteVideo);

function muteVideo() {
  if (vid.muted == true) {
    vid.muted = false;
    muteBtn.innerHTML = "Mute";
  }

  else if (vid.muted == false) {
    vid.muted = true;
    muteBtn.innerHTML = "Unmute";
  }

}


// volume slider
var volSlider = document.querySelector("#slider");
volSlider.addEventListener("change", volChange);

function volChange() {
  vid.volume = volSlider.value / 100;
  document.querySelector("#volume").innerHTML = volSlider.value + "%";
}


// styled
var oldSchool = document.getElementById("vintage").addEventListener("click", oldSchoolVideo);

function oldSchoolVideo() {
	vid.classList.add("oldSchool");
}


// original
var original = document.getElementById("orig").addEventListener("click", originalVideo);

function originalVideo() {
	vid.classList.remove("oldSchool");
}
