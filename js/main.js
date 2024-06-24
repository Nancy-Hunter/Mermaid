let mermaidCode = []

function removeTransition() { //resets password transition markers
    const keys = Array.from(document.querySelectorAll('.key'));
    keys.forEach(el=> el.classList.remove('playing'));
    mermaidCode = []
    }
    
function clickNumber(e) { 
    console.log(e)
    const key = document.querySelector(`div[id="${e.target.innerText}"]`);
    key.classList.add('playing');
    //adds yellow border to clicked numbers
        
    const audio = new Audio('sounds/ride.wav')
    audio.currentTime = 0;
    audio.play();
    //plays sound??

    mermaidCode.push(e.target.innerText)
    console.log(mermaidCode)
    //populates mermaid code guess
}

function passwordCheck() {
    if (mermaidCode.join('') == '15423') {
        let winners = document.querySelectorAll('.win')
        winners.forEach(el=> el.style.display= 'block')

    } else {
        document.querySelector('.lose').style.display= 'block'
        setTimeout(function(){
          document.querySelector('.lose').style.display= 'none'  
        }, 1000);
        removeTransition()
    }
}
//checks for win and resets for lose

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('click', clickNumber));

document.querySelector('button[type="button"]').addEventListener('click', removeTransition)
document.querySelector('button[type="submit"]').addEventListener('click', passwordCheck)