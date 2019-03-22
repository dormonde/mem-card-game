const cards = document.querySelectorAll('.card');
const winScreen = document.getElementById('winW');
const resetBtn = document.getElementById('resetBtn');
let hasFlippedCard = false;
let firstCard, secordCard;
let lockBoard = false;

var points = 0;

    function flipCard() {
    if(lockBoard) return;
    if (this === firstCard) return;
    
    this.classList.add('flip');
    
    if (!hasFlippedCard) {
        //first click
        hasFlippedCard = true;
        firstCard = this;
        
        return
    } 
        //second click
        secordCard = this;
        
        //card match
        cardMatch();
    
}

function cardMatch() {
    if (firstCard.dataset.framework === secordCard.dataset.framework) {
            //match 
            disableCards();
            points++;
        } else {
            //not a match
            unFlipCards();
        }
    function winCon(){
    if (points === 6) {
        winScreen.removeAttribute('hidden');
    } return;
}
winCon();
}

function disableCards() {
            firstCard.removeEventListener("click", flipCard);
            secordCard.removeEventListener("click", flipCard);
    reset();
}

function unFlipCards() {
    lockBoard = true;
    setTimeout(() => {
            firstCard.classList.remove('flip');
            secordCard.classList.remove('flip');
            reset();
    }, 1000);
}

function reset() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secordCard] = [null, null];
}

function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
};

function gameReset() {
    cards.forEach(card => card.classList.remove('flip'));
    reset();
    
    points = 0;
    winScreen.setAttribute('hidden', 'index.html');
    setTimeout(shuffle, 500);
    return;
}

resetBtn.addEventListener('click', gameReset);
resetBtn.addEventListener('click', click);
window.addEventListener('load', shuffle());
function click() {
cards.forEach(card => card.addEventListener("click", flipCard));} click();

