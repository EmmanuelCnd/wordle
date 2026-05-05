import { randomWord, currentRow, tiles} from "../main";

export class checkWords{
    static checkWord(word: String): Boolean{
        word = word.toUpperCase();
        
        for(let i = 0; i < 5; i++){
            const tileIndex = currentRow * 5 + i;
            const tile = tiles[tileIndex];
            if (word[i] == randomWord[i]){
                tile.classList.add("correct");
            } else if (randomWord.includes(word[i])){
                tile.classList.add("present");
            } else {
                tile.classList.add("absent");
            }
        }
        if (word==randomWord){
            alert("Gratulację! Ilość prób wynosi: "+(currentRow+1));
            return true;
        } else if (currentRow == 5){
            alert("Koniec gry! Słowo: "+randomWord);
            return false;
        } else {
            return false;
        }
    }
}