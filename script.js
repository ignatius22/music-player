const music = document.querySelector('audio');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress')
const image = document.querySelector('img');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration')
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// musics

const songs = [
  {
    name: 'asa',
    displayName: 'Asa_The_One_That_Never_Comes',
    artist: 'Asa',
  },
  {
    name: 'bruno',
    displayName: 'Bruno Mars - That’s What I Like  Official Video ',
    artist: 'Bruno Mars',
  },
  {
    name: 'dave',
    displayName: "Can't turn back the",
    artist: 'Dav Koze',
  },
];

let isPlaying = false;

function playSong() {
  isPlaying = true;
  playBtn.classList.replace('fa-play', 'fa-pause');
  playBtn.setAttribute('title', 'pause');
  music.play();
}

function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'play');
  music.pause();
}

playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

function loadSongs(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  image.src = `img/${song.name}.jpg`;
}

// update progress and time

function updateProgressBar(e){
	if(isPlaying){
	const {duration, currentTime} = e.srcElement;
		// console.log(duration,currentTime);
		// update progress bar width
		const progressPercentage = (currentTime / duration) * 100
		progress.style.width = `${progressPercentage}%`
		// calculate display for duration
		const durationMinute = Math.floor(duration / 60);
		console.log('minutes:', durationMinute)
		let durationSeconds = Math.floor(duration % 60);
		if(durationSeconds < 10){
			durationSeconds = `0${durationSeconds}`
		}
		console.log('seconds:', durationSeconds)
		
		// delay switchingn duration element to avoid NAN 
		if(durationSeconds){
			durationEl.textContent = `${durationMinute}:${durationSeconds}`;
		}
		const durationMinute = Math.floor(currentTime / 60);
		// console.log('minutes:', durationMinute)
		let currentSeconds = Math.floor(currentTime % 60);
		if(currentSeconds < 10){
			currentSeconds = `0${currentSeconds}`
		}
	}
	console.log('seconds:', currentSeconds)
	currentTimeEl.textContent = `${currentMinute}:${currentSeconds}`;
}




prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('timeupdate', updateProgressBar)

// Current song

let songIndex = 0;

function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSongs(songs[songIndex]);
  playSong();
}

function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSongs(songs[songIndex]);
  playSong();
}
