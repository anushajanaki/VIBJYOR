const button=document.querySelector("button");
const body=document.querySelector("body");
const color=["voilet","indigo","blue","green","orange","red"]
document.addEventListener('click',function(){
body.style.background=color[Math.floor(Math.random()*color.length)];
})