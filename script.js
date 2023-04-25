console.log('sdas');

var audio = new Audio('./xuxa-aniv.mp3');

var playPromise = audio.play();

function pauseAudio() {
	if (audio.paused){
		let a = audio.play();
	}
	else {
		let a = audio.pause();
	}
}