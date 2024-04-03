const diceElement = document.getElementById('dice');
const gameBoard = document.getElementById('gameBoard');
const NUM_DICE = 5;
const NUM_ROWS = 13;
const NUM_COLS = 6;
let diceValues = Array.from({ length: NUM_DICE }, () => rollDie());
let rollsLeft = 2;
let activeColumn = 0;

// Spielblock erzeugen
for (let i = 0; i < NUM_ROWS; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < NUM_COLS; j++) {
        const cell = document.createElement('td');
        cell.setAttribute('id', `cell-${i}-${j}`);
        cell.addEventListener('mouseover', highlightCell);
        row.appendChild(cell);
    }
    gameBoard.appendChild(row);
}

renderDice();

function rollDice() {
    if (rollsLeft > 0) {
        diceValues = diceValues.map(() => rollDie());
        rollsLeft--;
        renderDice();
    }
}

function resetGame() {
    diceValues = Array.from({ length: NUM_DICE }, () => rollDie());
    rollsLeft = 2;
    renderDice();
}

function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

function renderDice() {
    diceElement.innerHTML = '';
    diceValues.forEach(value => {
        const dieElement = document.createElement('div');
        dieElement.classList.add('die');
        dieElement.textContent = value;
        diceElement.appendChild(dieElement);
    });
    diceElement.innerHTML += `<p>Verbleibende Würfe: ${rollsLeft}</p>`;
}

function highlightCell(event) {
    const cell = event.target;
    const [rowIndex, colIndex] = getCellIndexes(cell.id);
    
    // Regel 1: Aktuelle Spielspalte hervorheben
    if (colIndex === activeColumn) {
        cell.style.backgroundColor = 'lightblue';
    }
    
    // Regel 3: Gesamte Zeile hervorheben
    const row = cell.parentNode;
    row.style.backgroundColor = 'lightyellow';
    
    // Regel 2: Bei Bewegen der Maus über eine Zelle, soll jene vervorgehoben werden
    if (colIndex === activeColumn) {
        cell.addEventListener('mouseout', function () {
            cell.style.backgroundColor = '';
            row.style.backgroundColor = '';
        });
    }
}

function getCellIndexes(cellId) {
    const [_, rowIndex, colIndex] = cellId.split('-');
    return [parseInt(rowIndex), parseInt(colIndex)];
}
