function playSound(event) {

    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if(!audio) return; // stop the function from running all together
    audio.currentTime = 0; // rewind to start
    audio.play();
    key.classList.add('playing');

}


function removeTransition(event) {
    if(event.propertyName !== 'transform') return; // skip it if it's not a transition
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);