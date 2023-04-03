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


// slow
document.querySelector("#slower").addEventListener("click", function() {
	vid.playbackRate *= 0.90
console.log("speed is" + vid.playbackRate);
});


// fast
document.querySelector("#faster").addEventListener("click", function() {
	vid.playbackRate /= 0.90
console.log("speed is" + vid.playbackRate);
});


// skip
document.querySelector("#skip").addEventListener("click", function() {
	vid.currentTime +=15
	if( vid.currentTime >= vid.duration)
	vid.currentTime = 0
  console.log("current time is " + vid.currentTime);
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

