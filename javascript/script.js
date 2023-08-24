console.log("welcome to my music");

let songIndex = 0;
let audioElement = new Audio('./javascript/1.mp3');

// document.getElementById("masterPlay").addEventListener('click', () => {

//     audioElement.play();
    
// })



// audioElement.play();


let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let songs = [
    { songName: "dope shop", filePath: "song/1.mp3" }

]


masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-regular', 'fa-2x' , 'fa-circle-play');
        masterPlay.classList.add('fa-solid' ,'fa-2x' , 'fa-pause');

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-solid' ,'fa-2x' , 'fa-pause');
        masterPlay.classList.add('fa-regular', 'fa-2x' , 'fa-circle-play');
       
    }

})

myProgressBar.addEventListener('timeupdate', () => {
    console.log('timeupdate');

})
