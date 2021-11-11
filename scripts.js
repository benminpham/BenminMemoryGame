const cards = document.querySelectorAll('.memory-card');

let hasCard = false;
let Board = false;
let first, second;
let clicked = false;
let incre = 0;
let timer;
let tries = 0;
function flipCard() {
  if (Board) return;
  if (this === first) return;

  this.classList.add('flip');

  if (!hasCard) {
    hasCard = true;
    first = this;
    return;
  }

  second = this;
  Board = true;

  checkMatch();
  if (incre == 8){
    alert("Congrats! You Win");
  }
}
function checkMatch() {
  let Match = first.dataset.name === second.dataset.name;
  Match ? disable() : unflip();
  if(Match == true){
    incre += 1;
  }
  tries += 1;
}
function disable() {
  first.removeEventListener('click', flipCard);
  second.removeEventListener('click', flipCard);

  resetBoard();
}
function resetBoard() {
  hasCard = false;
  Board = false;
  first = null;
  second = null;
}
function unflip() {
    setTimeout(() => {
        first.classList.remove('flip');
        second.classList.remove('flip');
        resetBoard();
    }, 1400);
}

(function shuffle() {
  cards.forEach(card => {
    let ramdom = Math.ceil(Math.random() * 12);
    card.style.order = ramdom;
  });
})();
cards.forEach(card => card.addEventListener('click', flipCard));

