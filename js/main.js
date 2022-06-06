/*----------------const---------------*/
const slot = document.getElementById('slot'); 
const slot2 = document.getElementById('slot2'); 
const slot3 = document.getElementById('slot3'); 

const winMessage = document.getElementById('resultMessage');

let balance = 10000;

const bank = document.getElementById('bank');
bank.innerText = 'Balance: $' + balance;



let tiles = ['j', 'q', 'k', 'a', 'c']



/*-------------event listeners-------------*/
document.getElementById('button').addEventListener('click', onSpin);





/*---------------functions-----------------*/
function onSpin(){
    /* stops function if funds are insufficient */
    if(balance < 100){
        return;
    }

    balance = balance - 100;
    
    /* chooses a tile to place in each slot */
    slot.innerText = tiles[Math.floor(Math.random() * 5)];
    slot2.innerText = tiles[Math.floor(Math.random() * 5)];
    slot3.innerText = tiles[Math.floor(Math.random() * 5)];
    
    /* adds winnings to player balance */
    const result = slot.innerText + slot2.innerText + slot3.innerText;
    if(result === 'ccc'){
        balance = balance + 50000;
        winMessage.innerText = 'Jackpot! You won $50,000!';
    }else if(result === 'aaa'){
        balance = balance + 10000;
        winMessage.innerText = 'Incredible! You won $10,000!';
    }else if(result === 'kkk'){
        balance = balance + 5000;
        winMessage.innerText = 'Amazing! You won $5,000!';
    }else if(result === 'qqq'){
        balance = balance + 2000;
        winMessage.innerText = 'Nice! You won $2,000!';
    }else if(result === 'jjj'){
        balance = balance + 1000;
        winMessage.innerText = 'Congrats! You won $1,000!';
    }else{
        winMessage.innerText = 'Try again!';
    }

    if(balance < 100){
        winMessage.innerText = 'Bankrupt! You lose.';
    }

    bank.innerText = 'Balance: $' + balance;
}