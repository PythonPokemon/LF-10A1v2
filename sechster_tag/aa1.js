// Funktion zum Erstellen eines Elements mit dem angegebenen Tag und Textinhalt
function createElement(tag, text) {
    var element = document.createElement(tag);
    element.textContent = text;
    return element;
  }
  
  // Funktion zum Hinzufügen eines neuen Blocks
  function addBlock() {
    // Neuen Block erstellen
    var newBlock = createElement('div', 'Dies ist ein neuer Block');
  
    // Block an den Body anhängen
    document.body.appendChild(newBlock);
  }
  
  // Body-Container auswählen
  var body = document.body;
  
  // Überschrift erstellen und an den Body anhängen
  body.appendChild(createElement('h1', 'Willkommen auf unserer Seite'));
  
  // Abschnitt erstellen und an den Body anhängen
  var section = createElement('section', '');
  body.appendChild(section);
  
  // Liste erstellen und an den Abschnitt anhängen
  var ul = createElement('ul', '');
  section.appendChild(ul);
  
  // Listenelemente erstellen und an die Liste anhängen
  ul.appendChild(createElement('li', 'Punkt 1'));
  ul.appendChild(createElement('li', 'Punkt 2'));
  ul.appendChild(createElement('li', 'Punkt 3'));
  
  // Absatz erstellen und an den Body anhängen
  body.appendChild(createElement('p', 'Vielen Dank für Ihren Besuch!'));
  
  // Schaltfläche zum Hinzufügen eines neuen Blocks erstellen und an den Body anhängen
  var addButton = createElement('button', 'Neuen Block hinzufügen');
  addButton.onclick = addBlock;
  body.appendChild(addButton);
  