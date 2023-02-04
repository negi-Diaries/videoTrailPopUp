console.log("checking whether working or not");
// grabbing video
 let videoEl = document.querySelector('video');
// grabbing the trailer container 
let trailer = document.getElementById('trailerContainer');
// grabbing the button
let button = document.getElementById("btn");
button.addEventListener('click', ()=>{
    trailer.classList.remove("active")
    videoEl.play();
})

// now grab the cross icon 
let crossIcon = document.getElementById('crossIcon');
crossIcon.addEventListener('click', ()=>{
    trailer.classList.add("active");
    videoEl.pause();
    videoEl.currentTime = 0;
})