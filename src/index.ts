import './styles.css';
import { getRandomInt } from './utils';

const squares = document.querySelectorAll('.square');

const secret = getRandomInt(0, 5);
let guesses = 0;

const winnerMessage = document.getElementById('guessMessage') as HTMLSpanElement;

squares.forEach((sq, idx) => {
    const el = sq as HTMLDivElement;
    if ((idx) === secret) {
        el.dataset.secret = 'true';
    }
    sq.addEventListener('click', handleClick)

});

function handleClick() {
    guesses = guesses + 1;
    const el = this as HTMLDivElement;
    if (el.dataset.secret) {
        el.classList.add('winner');
        squares.forEach(sq => {
            sq.removeEventListener('click', handleClick)
        })
        winnerMessage.innerHTML = `<small> - You guessed this in <b>${guesses}</b> guesses!!!</small>`;
    } else {
        el.classList.add('loser');
    }
    el.removeEventListener('click', handleClick);

}