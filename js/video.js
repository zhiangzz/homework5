// Add js here.
const playVideo = document.querySelector('#play');
const pauseVideo = document.querySelector('#pause');
const slowDown = document.querySelector('#slower');
const speedUp = document.querySelector('#faster');
const skipAhead = document.querySelector('#skip');
const mute = document.querySelector('#mute');
const video = document.querySelector('#videoplayer');
const slider = document.querySelector('#slider');
const volume = document.querySelector('#volume');
video.load();
video.autoplay=false;
video.loop=false;
// video.addEventListener('load',(e)=>{
//     e.target.autoplay=false;
//     e.target.loop =false;
// })

playVideo.addEventListener('click',()=>{
    video.play();
})

pauseVideo.addEventListener('click',()=>{
    video.pause();
})

slowDown.addEventListener('click',()=>{
    if (video.playbackRate===2){
        video.playbackRate=1;
    }
    else if(video.playbackRate===1){
        video.playbackRate=0.5;
    }
    else if (video.playbackRate===0.5){
        alert("Video is at slowest speed!");
    }
})

speedUp.addEventListener('click',()=>{
    if (video.playbackRate===0.5){
        video.playbackRate=1;
    }
    else if(video.playbackRate===1){
        video.playbackRate=2
    }
    else if (video.playbackRate===2){
        alert("Video is at fastest speed!");
    }
})

skipAhead.addEventListener('click',()=>{
    video.currentTime>=video.duration ? video.currentTime = 0:video.currentTime+=15;
})

mute.addEventListener('click',(e)=>{
    if (video.muted===true){
        video.muted = false;
        e.target.innerHTML = 'Mute';
        slider.value = 100;
        volume.innerHTML = '100%';
    }
    else{
        video.muted = true;
        e.target.innerHTML = 'Unmute';
        slider.value = 0;
        volume.innerHTML = '0%';
    }

})

slider.addEventListener('change',(e)=>{
    video.volume = e.target.value/100;
    volume.innerHTML = `${video.volume*100}%`;
})







