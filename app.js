function removeAnimation(e) {
    if(e.propertyName !== "transform") {
        return
    }
    e.target.classList.remove("playing")
};

window.addEventListener("keydown", (e) => {
   const audio = document.querySelector(`audio[data-key="${e.code}"`);
   const key = document.querySelector(`div[data-key="${e.code}"`);
   if(!audio) {
       return;
   }
   audio.currentTime = 0;
   audio.play();
   key.classList.add('playing');
   setTimeout(() => {
       key.classList.remove("playing")
   }, 100)
})
