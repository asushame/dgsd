//write here your js
// console.log('learning js')

// Открыть модальное окно
let popUpOpen = document.querySelector ('.open-popup');
let popUp = document.querySelector ('.popupbg');
let popUpClose = document.querySelector ('.popup-button');

popUpOpen.onclick = function () {
    popUp.classList.add('active');
}
// закрыть модальное окно
popUpClose.onclick = function () {
    popUp.classList.remove('active');
}

// закрыть модальное окно по бэкграунду

// ПЛЕЕР

// Элементы
const player = document.querySelector('.player');
const playButton = document.querySelector('.play');
const previousButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');                      
const audio = document.querySelector('.audio');
const progressContainer = document.querySelector('.progress'); 
const progressBar = document.querySelector('.progress_bar'); 
const artistName = document.querySelector('.artistname');
const songName = document.querySelector('.songname');
const songCover = document.querySelector('.cover_img'); 
const imgSrc = document.querySelector('.img_src');

// Названия песен
const songs = ['Karma Police', 'Close Eyes','Money and run','Electric Feel' ]

// Песня по умолчанию
let songIndex = 0 

// Init
function loadSong (songname) {
    songName.innerHTML = songname;
    audio.src =  `music/${songname}.mp3`
    songCover.src = `img/cover${songIndex + 1}.png `
}
loadSong (songs[songIndex])

// Play
function playSong (){
    player.classList.add('play')
    songCover.classList.add('activee')
    imgSrc.src = './img/pause.svg'
    audio.play()
}

// Pause
function pauseSong (){
    player.classList.remove('play')
    songCover.classList.remove('activee')
    imgSrc.src = './img/play.svg'
    audio.pause()
}
playButton.addEventListener('click', () =>{
    const isPlaying = player.classList.contains('play')
    if(isPlaying){
        pauseSong()
    } else{
        playSong()
    }
})

// Next song
function nextSong (){
    songIndex++

    if(songIndex > songs.length -1){
        songIndex = 0
    }

    loadSong (songs[songIndex])
    playSong()
}
nextButton.addEventListener('click', nextSong)

//Previous song
function previousSong (){
    songIndex--

    if(songIndex < 0){
        songIndex = songs.length -1
    }

    loadSong (songs[songIndex])
    playSong()
}
previousButton.addEventListener('click',previousSong)

// Progress bar
function updateProgress(e){
    const{duration, currentTime} = e.srcElement
    // console.log(duration)
    // console.log(currentTime)
    const progressPercent = (currentTime / duration) * 100 
    progressBar.style.width=`${progressPercent}%`
}
audio.addEventListener('timeupdate', updateProgress)

// Перемотка
function setProgress (e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration

    audio.currentTime = (clickX / width) * duration
    
}
progressContainer.addEventListener('click', setProgress)

// Автоплей
audio.addEventListener('ended', nextSong)










