const music = document.querySelector('audio')
const prevBtn = document.getElementById('prev')
const playBtn = document.getElementById('play')
const nextBtn = document.getElementById('next')



// check isPlaying

let isPlaying = false


// play 

function playSong(){
	isPlaying = true
	music.play()
}

// pause

function pauseSong(){
	isPlaying = false
	music.pause()
}

// play or pause Event Listener
playBtn.addEventListener('click',()=>(isPlaying? pauseSong() : playSong()))