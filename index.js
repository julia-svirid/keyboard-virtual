const parentContainer  = document.querySelector('.main');

const CONTAINER = document.createElement('div');
CONTAINER.classList.add('container'); 
parentContainer.appendChild(CONTAINER);

const TEXTAREA = document.createElement('textarea');
TEXTAREA.classList.add('textarea');
CONTAINER.appendChild(TEXTAREA);


const KEYBOARD = document.createElement('div');
KEYBOARD.classList.add('keyboard');
CONTAINER.appendChild(KEYBOARD);

let rusAlphabet = ["й","ц","у","к","е","н","г","ш","щ", "з", "х", "ъ","\\", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", "."];

let engAlphabet = ['q', 'w', ' e', ' r', 't',' y', 'u', 'i', 'o', 'p','[',']','\\','a','s','d','f','g','h','j','k','l',';',"'",'z','x',"c","v","b","n","m",",",".","/"];


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
row4.appendChild(arrowUp);
let upImg = document.createElement('img');
upImg.src = './assets/up.svg';
arrowUp.appendChild(upImg);


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
row5.appendChild(arrowleft);
let leftImg = document.createElement('img');
leftImg.src = './assets/left.svg';
arrowleft.appendChild(leftImg);



let arrowDown = document.createElement('div');
arrowDown.classList.add('key');
arrowDown.classList.add('arrowDown');
row5.appendChild(arrowDown);
let downImg = document.createElement('img');
downImg.src = './assets/down.svg';
arrowDown.appendChild(downImg);


let arrowRight = document.createElement('div');
arrowRight.classList.add('key');
arrowRight.classList.add('arrowRight');
row5.appendChild(arrowRight);
let rightImg = document.createElement('img');
rightImg.src = './assets/right.svg';
arrowRight.appendChild(rightImg);