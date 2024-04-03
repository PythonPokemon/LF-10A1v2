// Funktion zum Generieren eines zufälligen Würfelwerts (1-6)
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  // Funktion zum Erstellen eines Würfels und Hinzufügen zu einer Zelle
  function createDie(cell) {
    var dieValue = rollDie();
    var dieElement = document.createElement('div');
    dieElement.textContent = dieValue;
    dieElement.classList.add('die');
    dieElement.classList.add('die-' + dieValue);
    cell.appendChild(dieElement);
  }
  
  // Funktion zum Erstellen aller Würfel auf dem Spielfeld
  function createAllDice() {
    var cells = document.querySelectorAll('#game-board td');
    cells.forEach(function(cell) {
      createDie(cell);
    });
  }
  
  // Funktion zum Löschen aller Würfel auf dem Spielfeld
  function clearAllDice() {
    var cells = document.querySelectorAll('#game-board td');
    cells.forEach(function(cell) {
      cell.innerHTML = '';
    });
  }
  
  // Funktion zum Hervorheben der aktuellen Spielspalte
  function highlightColumn(columnIndex) {
    var columns = document.querySelectorAll('#game-board th');
    columns.forEach(function(column, index) {
      if (index === columnIndex) {
        column.classList.add('active-column');
      } else {
        column.classList.remove('active-column');
      }
    });
  }
  
  // Funktion zum Hervorheben einer Zelle beim Hovern
  function highlightCell(cell) {
    cell.classList.add('highlighted-cell');
  }
  
  // Funktion zum Entfernen des Hervorhebens einer Zelle
  function unhighlightCell(cell) {
    cell.classList.remove('highlighted-cell');
  }
  
  // Funktion zum Hervorheben einer gesamten Zeile
  function highlightRow(rowId) {
    var row = document.getElementById(rowId);
    row.classList.add('highlighted-row');
  }
  
  // Funktion zum Entfernen des Hervorhebens einer gesamten Zeile
  function unhighlightRow(rowId) {
    var row = document.getElementById(rowId);
    row.classList.remove('highlighted-row');
  }
  
  // Funktion zum Aktualisieren der Spielblöcke und Würfel
  function updateGame() {
    clearAllDice();
    createAllDice();
  }
  
  // Spielbogen initialisieren
  createAllDice();
  