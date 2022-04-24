window.addEventListener('keydown',function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    if(!audio)return;// stops the function from running as there is no audio file associated with the key
    audio.currentTime = 0; //rewinds the audio to the start to allow multiple inputs within the time frame
    audio.play();

    key.classList.toggle('playing');
    
  function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
  } 
    

 const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend',removeTransition));
})
