let Progress_song = document.getElementById("Progress_song");
let song = document.getElementById("song");
let play = document.getElementById("PlayMusic");
let songs = [
    {
        src: "resources/lost-in-city-lights-145038.mp3",
        name: "Lost in the City Lights",
        author: "Cosmo Sheldrake",
        cover: "resources/cover-1.png"
    },
    {
        src: "resources/forest-lullaby-110624.mp3",
        name: "Forest Lullaby",
        author: "Lesfm",
        cover: "resources/cover-2.png"
    },
];
let currentSongIndex = 0;


song.onloadedmetadata = function () {
    Progress_song.max = song.duration;
    Progress_song.value = song.currentTime;
}

function PlayPause() {
    if (play.classList.contains("stop")){
        song.pause();
        play.classList.remove("stop")
        play.classList.add("play")
    }
    else {
        song.play();
        play.classList.add("stop")
        play.classList.remove("play")
    }
}


if (song.play()) {
    setInterval(()=>{
        Progress_song.value = song.currentTime;
    },500);    
}

Progress_song.onchange = function (){
    song.play();
    song.currentTime = Progress_song.value
    play.classList.add("play")
    play.classList.remove("stop")
}

function changeSong(index) {
    if (index >= 0 && index < songs.length) {
        currentSongIndex = index;
        let currentSong = songs[currentSongIndex];
        song.src = currentSong.src;
        document.getElementById("Name_song").innerText = currentSong.name;
        document.getElementById("Autor_song").innerText = currentSong.author;
        document.querySelector(".Img_player").src = currentSong.cover;
        song.load();
        song.play();
    }
}

document.getElementById("pass").addEventListener("click", function () {
    if (currentSongIndex < songs.length - 1) {
        changeSong(currentSongIndex + 1);
    } else {
        changeSong(0); // loop back to the first song
    }
});

document.getElementById("reverse").addEventListener("click", function () {
    if (currentSongIndex > 0) {
        changeSong(currentSongIndex - 1);
    } else {
        changeSong(songs.length - 1); // loop back to the last song
    }
});