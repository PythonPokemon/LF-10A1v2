// Funktion zum Ändern der Hintergrundfarbe eines Elements
function changeBackgroundColor() {
    var element = document.getElementById('changeColorElement');
    element.style.backgroundColor = 'lightblue';
  }
  
  // Funktion zum Umschalten der Sichtbarkeit eines Elements
  function toggleVisibility() {
    var element = document.getElementById('changeVisibilityElement');
    if (element.style.display === 'none') {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  }
  
  // Funktion im <script>-Tag im Kopf der HTML-Datei deklariert
  function myFunctionInHeadScript() {
    alert('Funktion im Kopf aufgerufen!');
  }
  
  // Funktion in einer externen .js-Datei deklariert
  function myFunctionInExternalScript() {
    alert('Funktion in externer Datei aufgerufen!');
  }
  
  // Funktion zum Abrufen des Textbereichsinhalts und Schreiben an eine andere Stelle
  function writeTextareaContent() {
    var textareaContent = document.getElementById('textareaInput').value;
    document.getElementById('textOutput').innerText = textareaContent;
  }
  