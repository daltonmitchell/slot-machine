/*----------------const---------------*/
const slot = document.getElementById('slot'); 
const slot2 = document.getElementById('slot2'); 
const slot3 = document.getElementById('slot3'); 

const winMessage = document.getElementById('resultMessage');

let balance = 10000;

const bank = document.getElementById('bank');
bank.innerText = 'Balance: $' + balance;

let tiles = ['j','q', 'k', 'a', 'c']


/*-------------event listeners-------------*/
document.getElementById('button').addEventListener('click', onSpin)


/*---------------functions-----------------*/
function onSpin(){
    /* stops function if funds are insufficient */
    if(balance < 100){
        return;
    }

    balance = balance - 100;
    
    /* chooses a tile to place in each slot */
    slot.innerHTML = tiles[Math.floor(Math.random() * 5)];
    slot2.innerHTML = tiles[Math.floor(Math.random() * 5)];
    slot3.innerHTML = tiles[Math.floor(Math.random() * 5)];

    
    /* adds winnings to player balance */
    const result = slot.innerText + slot2.innerText + slot3.innerText;
    if(result === 'ccc'){
        balance = balance + 50000;
        winMessage.innerText = 'Jackpot! You won $50,000!';
        winMessage.style.color = 'gold';
    }else if(result === 'aaa'){
        balance = balance + 10000;
        winMessage.innerText = 'Incredible! You won $10,000!';
        winMessage.style.color = 'gold';
    }else if(result === 'kkk'){
        balance = balance + 5000;
        winMessage.innerText = 'Amazing! You won $5,000!';
        winMessage.style.color = 'gold';
    }else if(result === 'qqq'){
        balance = balance + 2000;
        winMessage.innerText = 'Nice! You won $2,000!';
        winMessage.style.color = 'gold';
    }else if(result === 'jjj'){
        balance = balance + 1000;
        winMessage.innerText = 'Congrats! You won $1,000!';
        winMessage.style.color = 'gold';
    }else{
        winMessage.style.color = 'rgb(216, 126, 29)'
        winMessage.innerText = 'Try again!';
    }
    
    if(balance < 100){
        winMessage.innerText = 'Bankrupt! You lose.';
    }
    
    /* adds images to slot tiles */
    if(slot.innerText === 'j'){
        slot.style.backgroundImage = "url('https://i.imgur.com/Qhmdbt1.jpg')";
        slot.innerText = '';
    }else if(slot.innerText === 'q'){
        slot.style.backgroundImage = "url('https://i.imgur.com/fTkCmZZ.png')";
        slot.innerText = '';
    }else if(slot.innerText === 'k'){
        slot.style.backgroundImage = "url('https://i.imgur.com/r6128fl.jpg')";
        slot.innerText = '';
    }else if(slot.innerText === 'a'){
        slot.style.backgroundImage = "url('https://i.imgur.com/pG2hJnE.jpg')";
        slot.innerText = '';
    }else if(slot.innerText === 'c'){
        slot.style.backgroundImage = "url('https://i.imgur.com/u24VLBT.jpg')";
        slot.innerText = '';
    }

    if(slot2.innerText === 'j'){
        slot2.style.backgroundImage = "url('https://i.imgur.com/Qhmdbt1.jpg')";
        slot2.innerText = '';
    }else if(slot2.innerText === 'q'){
        slot2.style.backgroundImage = "url('https://i.imgur.com/fTkCmZZ.png')";
        slot2.innerText = '';
    }else if(slot2.innerText === 'k'){
        slot2.style.backgroundImage = "url('https://i.imgur.com/r6128fl.jpg')";
        slot2.innerText = '';
    }else if(slot2.innerText === 'a'){
        slot2.style.backgroundImage = "url('https://i.imgur.com/pG2hJnE.jpg')";
        slot2.innerText = '';
    }else if(slot2.innerText === 'c'){
        slot2.style.backgroundImage = "url('https://i.imgur.com/u24VLBT.jpg')";
        slot2.innerText = '';
    }

    if(slot3.innerText === 'j'){
        slot3.style.backgroundImage = "url('https://i.imgur.com/Qhmdbt1.jpg')";
        slot3.innerText = '';
    }else if(slot3.innerText === 'q'){
        slot3.style.backgroundImage = "url('https://i.imgur.com/fTkCmZZ.png')";
        slot3.innerText = '';
    }else if(slot3.innerText === 'k'){
        slot3.style.backgroundImage = "url('https://i.imgur.com/r6128fl.jpg')";
        slot3.innerText = '';
    }else if(slot3.innerText === 'a'){
        slot3.style.backgroundImage = "url('https://i.imgur.com/pG2hJnE.jpg')";
        slot3.innerText = '';
    }else if(slot3.innerText === 'c'){
        slot3.style.backgroundImage = "url('https://i.imgur.com/u24VLBT.jpg')";
        slot3.innerText = '';
    }
    
    bank.innerText = 'Balance: $' + balance;
}
