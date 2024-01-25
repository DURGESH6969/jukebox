


// Initialize variables
let songIndex = 0;
let audioElement = new Audio();
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

// Define songs with their details
let songs = [
    { songName: "Saiyara - Ek Tha Tiger", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Waalian - Harnoor", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Salam-e-Ishq", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    // Add more songs here
    { songName: "Thoda Thoda Pyar - Stebin Ben", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "High Rated Gabru", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Falak Tak", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Bahubali", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Faded - Alan Walker", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Kgf - Theme song", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Jai Shree Ram", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" }
];

// Function to initialize song list
function initializeSongList() {
    songItems.forEach((element, index) => {
        let img = element.getElementsByTagName("img")[0];
        let songName = element.getElementsByClassName("songName")[0];
        img.alt = songs[index].songName;
        img.src = songs[index].coverPath;
        songName.innerText = songs[index].songName;
    });
}

// Function to play/pause song
function togglePlayPause() {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
}

// Event listener for masterPlay button
masterPlay.addEventListener('click', togglePlayPause);

// Event listener for time update
audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

// Event listener for progress bar change
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});

// Event listener for song item clicks

songItems.forEach((element, index) => {
    element.addEventListener('click', () => {
        songIndex = index;
        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    });
});


// Event listener for next button
document.getElementById('next').addEventListener('click', () => {
    songIndex = (songIndex + 1) % songs.length;
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});

// Event listener for previous button
document.getElementById('previous').addEventListener('click', () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});

// Initialize the song list
initializeSongList();

