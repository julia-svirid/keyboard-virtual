const parentContainer  = document.querySelector('.main');



const CONTAINER = document.createElement('div');
CONTAINER.classList.add('container'); 
parentContainer.appendChild(CONTAINER);

const title = document.createElement('h1');
title.classList.add('h1');
title.textContent = 'RSS VIRTUAL KEYBOARD'
CONTAINER.appendChild(title);

const TEXTAREA = document.createElement('textarea');
TEXTAREA.classList.add('textarea');
CONTAINER.appendChild(TEXTAREA);


const KEYBOARD = document.createElement('div');
KEYBOARD.classList.add('keyboard');
CONTAINER.appendChild(KEYBOARD);

let rusAlphabet = ["й","ц","у","к","е","н","г","ш","щ", "з", "х", "ъ","\\", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", "."];

let engAlphabet = ['q', 'w', 'e', 'r', 't','y', 'u', 'i', 'o', 'p','[',']','\\','a','s','d','f','g','h','j','k','l',';',"'",'z','x',"c","v","b","n","m",",",".","/"];


const row = document.createElement('div');
row.classList.add('row');
KEYBOARD.appendChild(row);


let numberRow = ['`', '1', '2', '3','4', '5', '6', '7', '8', '9', '0', '-', '='];
/* 1st row */
for(let i=0; i<numberRow.length; i++){     
    let keyNumbers = document.createElement('div');
    keyNumbers.className="key";
    keyNumbers.innerText=numberRow[i];
    row.append(keyNumbers);
    }

let backSpace = document.createElement('div');
backSpace.classList.add('key');
backSpace.classList.add('backspace');
backSpace.innerText = 'Backspace';
row.appendChild(backSpace);

/* 2nd row */
const row2 = document.createElement('div'); 
row2.classList.add('row');
KEYBOARD.append(row2);

let tab = document.createElement('div');
tab.classList.add('key');
tab.classList.add('tab');
tab.innerText = 'Tab';
row2.appendChild(tab);

for( let i = 0; i<13; i++){
    let keySecRow = document.createElement('div');
    keySecRow.classList.add('key');
    keySecRow.innerText = engAlphabet[i];
    row2.appendChild(keySecRow);
}


/* 3d row */
const row3 = document.createElement('div'); 
row3.classList.add('row');
KEYBOARD.append(row3);

let capslock = document.createElement('div');
capslock.classList.add('key');
capslock.classList.add('capslock');
capslock.innerText = 'CapsLock';
row3.appendChild(capslock);

let capsIndicator = document.createElement('div');
capsIndicator.classList.add('indicator');
capslock.appendChild(capsIndicator);


for( let i = 13; i<24; i++){
    let keyThirdRow = document.createElement('div');
    keyThirdRow.classList.add('key');
    keyThirdRow.innerText = engAlphabet[i];
    row3.appendChild(keyThirdRow);
}


let enter = document.createElement('div');
enter.classList.add('key');
enter.classList.add('enter');
enter.innerText = 'Enter';
row3.appendChild(enter);


/* 4th row */
const row4 = document.createElement('div'); 
row4.classList.add('row');
KEYBOARD.append(row4);

let shift = document.createElement('div');
shift.classList.add('key');
shift.classList.add('shift');
shift.innerText = 'Shift';
row4.appendChild(shift);

for( let i = 24; i<engAlphabet.length; i++){
    let keyFourthRow = document.createElement('div');
    keyFourthRow.classList.add('key');
    keyFourthRow.innerText = engAlphabet[i];
    row4.appendChild(keyFourthRow);
}


let shift2 = document.createElement('div');
shift2.classList.add('key');
shift2.classList.add('shift');
shift2.innerText = 'Shift';
row4.appendChild(shift2);


let arrowUp = document.createElement('div');
arrowUp.classList.add('key');
arrowUp.classList.add('arrowUp');
arrowUp.innerText = '↑';
row4.appendChild(arrowUp);



/* 5th row */

const row5 = document.createElement('div'); 
row5.classList.add('row');
KEYBOARD.append(row5);

let ctrl = document.createElement('div');
ctrl.classList.add('key');
ctrl.classList.add('ctrl');
ctrl.innerText = 'Ctrl';
row5.appendChild(ctrl);

let win = document.createElement('div');
win.classList.add('key');
win.classList.add('win');
win.innerText = 'Win';
row5.appendChild(win);

let alt = document.createElement('div');
alt.classList.add('key');
alt.classList.add('alt');
alt.innerText = 'Alt';
row5.appendChild(alt);


let space = document.createElement('div');
space.classList.add('key');
space.classList.add('space');
space.innerText = ' ';
row5.appendChild(space);



let alt2 = document.createElement('div');
alt2.classList.add('key');
alt2.classList.add('alt');
alt2.innerText = 'Alt';
row5.appendChild(alt2);

let ctrl2 = document.createElement('div');
ctrl2.classList.add('key');
ctrl2.classList.add('ctrl');
ctrl2.innerText = 'Ctrl';
row5.appendChild(ctrl2);

let arrowleft = document.createElement('div');
arrowleft.classList.add('key');
arrowleft.classList.add('arrowleft');
arrowleft.innerText = '←';
row5.appendChild(arrowleft);




let arrowDown = document.createElement('div');
arrowDown.classList.add('key');
arrowDown.classList.add('arrowDown');
arrowDown.innerText = '↓';
row5.appendChild(arrowDown);



let arrowRight = document.createElement('div');
arrowRight.classList.add('key');
arrowRight.classList.add('arrowRight');
arrowRight.innerText = '→';
row5.appendChild(arrowRight);


let keys = document.querySelectorAll('.key');
console.log(keys);



/* functional */
shift = false;
shift2 = false;
capsLock = 0;
KEYBOARD.addEventListener('click', type);


function type(event){

    let val = event.target.textContent;

    if (val == 'Backspace' || val == 'Capslock' || val == 'Shift' || val == 'Tab' || val == 'Enter'){

        if (val == 'Backspace'){
            let str = TEXTAREA.textContent;
            TEXTAREA.textContent = TEXTAREA.textContent.substring(0, str.length - 1); 
        }

        if (val == 'Capslock') {
            if (capsLock == 1){
                capsIndicator.style.backgroundColor = '#e90d0d';
                capsLock = 0;
                console.log(capsIndicator);
            }
            else if (capslock == 0){
                capsIndicator.style.backgroundColor = '#ffff';
                capsLock = 1;
            } 
        }
        
        if (val == 'Tab') {
            TEXTAREA.textContent += '        ';
        }

        if (val == 'Enter') {
            TEXTAREA.textContent += '\r\n';
        }
        
    }

     else {
        TEXTAREA.textContent += val;
    }
    
}




 TEXTAREA.addEventListener('keydown', (event)=> {
    const keyName = event.key;
    for (let i = 0; i<keys.length; i++){
       if(keyName==keys[i].textContent)  {
        keys[i].style.backgroundColor = '#139177';
        keys[i].style.transition = 'linear 0.1s';
        keys[i].style.boxShadow=' 0px 4px 0px rgba(0, 0, 0, 0.8)';

       }
    }
    

});



TEXTAREA.addEventListener('keyup', (event)=> {
    const keyName = event.key;
    for (let i = 0; i<keys.length; i++){
       if(keyName==keys[i].textContent )  {
        keys[i].style.backgroundColor = '#0c6d59';
        keys[i].style.transition = 'linear 0.1s';
        keys[i].style.boxShadow='none';
       }
    }
});


