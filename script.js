console.log("welcome to spotify");
let songindex=0;
let audioElement =new Audio('music1.mp3');
let masterplay=document.getElementById('masterplay');
let progressbar=document.getElementById('progressbar');
let gif=document.getElementById('gif');
let songitem=Array.from(document.getElementsByClassName('song-item'));


let songs=[
    {
    songName:"Pehle bhi me",filePath:"C:\Users\STM\Desktop\Project1\music1.mp3" ,coverPath: "animal.jpg" },
    {songName:"Heeriye",filePath:"C:\Users\STM\Desktop\Project1\music2.mp3" ,coverPath: "arijit.jpg" },
    {songName:"Dekhte Dekhte",filePath:"C:\Users\STM\Desktop\Project1\music3.mp3" ,coverPath: "atif.jpg" },
    {songName:"Ve Haniya",filePath:"C:\Users\STM\Desktop\Project1\music4.mp3" ,coverPath: "arijit.jpg" },
    {songName:"O Mahi",filePath:"C:\Users\STM\Desktop\Project1\music5.mp3" ,coverPath: "arijit.jpg"},
    {songName:"Kesariya",filePath:"C:\Users\STM\Desktop\Project1\music6.mp3" ,coverPath: "arijit.jpg" },
    {songName:"Tere Hawale",filePath:"C:\Users\STM\Desktop\Project1\music7.mp3" ,coverPath: "arijit.jpg"},
    {songName:"Maan Meri jaan",filePath:"C:\Users\STM\Desktop\Project1\music8.mp3" ,coverPath: "king.webp" }

    ]
   
 songitem.forEach((element,i)=>{
element.getElementsByTagName("img")[0].src=songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
 }
 )   




masterplay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
    audioElement.play();
    masterplay.classList.remove('fa-play')
    masterplay.classList.add('fa-pause')
         gif.style.opacity=1;   
}
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause')
        masterplay.classList.add('fa-play')
        gif.style.opacity=0;   

    }
})
audioElement.addEventListener('timeupdate',()=>{
progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressbar.value=progress;
})
progressbar.addEventListener('change',()=>{
audioElement.currentTime= progressbar.value*audioElement.duration/100;
})

const makeplayall=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
element.addEventListener('click',(e)=>{
   makeplayall()
  songindex=parseInt(e.target.id);
    e.target.classList.remove('fa-play');
    e.target.classList.add('fa-pause');
   audioElement.src=`music${songindex+1}.mp3`;
   audioElement.currentTime=0;
    audioElement.play();
   masterplay.classList.remove('fa-play');
  masterplay.classList.add('fa-pause');
})
})
document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=8){
        songindex=0;
    }
    else{
        songindex+=1;
    }
    audioElement.src=`music${songindex+1}.mp3`;
    audioElement.currentTime=0;
     audioElement.play();
    masterplay.classList.remove('fa-play');
   masterplay.classList.add('fa-pause');
}
)

document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0;
    }
    else{
        songindex-=1;
    }
    audioElement.src=`music${songindex+1}.mp3`;
    audioElement.currentTime=0;
     audioElement.play();
    masterplay.classList.remove('fa-play');
   masterplay.classList.add('fa-pause');
}
)