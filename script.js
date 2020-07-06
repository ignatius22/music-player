const music = document.querySelector('audio');
const image = document.querySelector('img');
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

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

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
