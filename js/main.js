/*----------------const---------------*/
const slot = document.getElementById('slot') 
const slot2 = document.getElementById('slot2') 
const slot3 = document.getElementById('slot3') 

let balance = 10000;

const bank = document.getElementById('bank');
bank.innerText = 'Balance: $' + balance;



let tiles = ['j', 'q', 'k', 'a', 'c']



/*-------------event listeners-------------*/
document.getElementById('button').addEventListener('click', onSpin);





/*---------------functions-----------------*/
function onSpin(){
    balance = balance - 100;
    bank.innerText = 'Balance: $' + balance;

    /* chooses a tile to place in each slot */
    slot.innerText = tiles[Math.floor(Math.random() * 5)];
    slot2.innerText = tiles[Math.floor(Math.random() * 5)];
    slot3.innerText = tiles[Math.floor(Math.random() * 5)];


}