export interface pHTMLi {
  start: string;
  squares: string;
  buttons: string;
}

export class prepareHTML {
  static prepHTML(): pHTMLi {
    const start: string = `<h1>WORDLE</h1> <div class="squares">`;

    let squares: string = ``;

    for (let i = 0; i < 6; i++) {
      squares += `<div class="row">`;
      for (let j = 0; j < 5; j++) {
        squares += `<div class="tile"></div>`;
      }
      squares += `</div>`;
    }

    squares += `</div>`;

    const buttons: string = `
      <button class='buttons' id='restartButton'>RESTART</button>
      <button class='buttons' id='hintButton'>PODPOWIEDŹ</button>
    `;

    return {
      start,
      squares,
      buttons
    };
  }
}