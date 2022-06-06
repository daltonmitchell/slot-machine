/*----------------const---------------*/
const slot = document.getElementById('slot') 
const slot2 = document.getElementById('slot2') 
const slot3 = document.getElementById('slot3') 

let balance = 20000;


let tiles = ['j', 'q', 'k', 'a', 'c']



/*-------------event listeners-------------*/
document.getElementById('button').addEventListener('click', onSpin);





/*---------------functions-----------------*/
function onSpin(){
    /* chooses a tile to place in each slot */
    slot.innerText = tiles[Math.floor(Math.random() * 5)];
    slot2.innerText = tiles[Math.floor(Math.random() * 5)];
    slot3.innerText = tiles[Math.floor(Math.random() * 5)];


}