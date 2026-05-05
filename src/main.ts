import '../css/style.css';
import { words } from './helpers/getWords';
import { prepareHTML } from './HTML/prepareHTML';
import { checkWords } from './helpers/checkWord';

const html = prepareHTML.prepHTML();
const { start, squares, buttons } = html;

document.querySelector<HTMLDivElement>('#game-root')!.innerHTML = start + squares + buttons;

export let randomWord: string = words[Math.floor(Math.random() * words.length)];

export let gameWon: Boolean = false;
export let currentRow: number = 0;
export let currentColumn: number = 0;
export let word: string = "";
export let index: number = 0;
export const tiles = document.querySelectorAll<HTMLDivElement>(".tile");

function restartGame(){
  gameWon = false;
  currentRow = 0;
  currentColumn = 0;
  word = "";
  index = 0;
  randomWord = words[Math.floor(Math.random() * words.length)];
  
  tiles.forEach(tile => {
    tile.textContent = "";
    tile.classList.remove("correct", "present", "absent");
  })
}

function addToSquare(key: string){
  if (currentColumn < 5){
    index = currentRow*5+currentColumn;
    tiles[index].textContent=key;
    word += key;
    currentColumn++;
  }
}

function deleteSquare(){
  if (currentColumn>0){
    word = word.slice(0,-1);
    currentColumn--;
    index = currentRow*5+currentColumn;
    tiles[index].textContent="";
  }
}

function checkAndNewRow(){
  if (currentColumn==5 && words.includes(word.toUpperCase())){
    gameWon = checkWords.checkWord(word);
    word = "";
    currentColumn=0;
    currentRow++;
  }
}

document.addEventListener("keydown", (e) => {
  if (!gameWon){
    if (e.key.length == 1 && e.key.match(/[a-ząćęłńóśźż]/i)){
      addToSquare(e.key);
    }
    if (e.key == "Backspace"){
      deleteSquare();
    }
    if (e.key == "Enter"){
        checkAndNewRow();
    }
  }
})

document.querySelector("#restartButton")?.addEventListener("click", restartGame);