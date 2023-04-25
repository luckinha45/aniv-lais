console.log('sdas');

var audio = new Audio('./xuxa-aniv.mp3');

var playPromise = audio.play();

function pauseAudio() {
	let a = audio.pause();
}