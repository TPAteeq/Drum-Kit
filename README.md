# Drum Kit Project - JavaScript (Vanilla)

GitHub Page :

**# Goals and origins of the project :**
This project comes from https://javascript30.com/
The purpose of taking this challenge is to understand the fundamentals of JavaScript before working with frameworks.

# Snapshot








# The Code

Each HTML Element is given a data-attribute called as "data-key" and its value is set as whatever the data input pressing the key gives to the keyboard. the value is the ASCII value.

   

     <div data-key="65" class="key">
    
	    <kbd>A</kbd>
    
	    <span class="sound">clap</span>
    
    </div>




Key down detection
	

    window.addEventListener('keydown',function(e){
		const  audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
		const  key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	    if(!audio)return;
	    audio.currentTime = 0;

		audio.play();

	    key.classList.toggle('playing');
	     
	    function  removeTransition(e){
		    if(e.propertyName !== 'transform') return;
			this.classList.remove('playing');
		}

	 const  keys = document.querySelectorAll('.key');
	 keys.forEach(key  =>  key.addEventListener('transitionend',removeTransition));
	 })

 
    

Whenever a key is pressed on the current window, the addEventListener listens for it and executes a function in which the data-key is checked and the element is attributed to key and audio.


    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
  if the key pressed does not have an associated audio file then the function is stopped
	

    if(!audio)return


the audio file is played using the play() function

    audio.play();

the audio current time is set to 0 whenever the key is pressed again to allow multiple inputs within the time frame

`audio.currentTime = 0;`

We toggle the class name of the key pressed and listen for the transition end event and run the remove Transition function, this function checks if the transition which came to an end was transform, if not then the function returns void, else it changes the class of the key pressed and removes the 'playing' class.

    function  removeTransition(e){
		if(e.propertyName !== 'transform') return;
		this.classList.remove('playing');
	}
	const  keys = document.querySelectorAll('.key');
	keys.forEach(key  =>  key.addEventListener('transitionend',removeTransition));




# What I learned 
    
    
    

 - What's a keyCode
 - How to access to div attributes
 - Change and remove class & style in a div
 - Using QuerySelector and QuerySelectorAll
 -  audio.methods()
 - Using EventListener on 'keydown'
 - using template literals

    

**Created by Mohammed Ateeq**


