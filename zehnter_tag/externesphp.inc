<?php 

    #Diese Funktion erstellt automatisch eine ganze Container-Gruppe.
    #Ein umschließenden <div>-Container, der einen <p>-Container und einen weiteren <p>-Container mit der aktuellen Uhrzeit beinhalte.
    #Diese Funktion hat einen Parameter $text.
    #Das beduetet es muss beim Aufruf der Funktion ein Wert übergeben werden (Zu sehen in der neu.php)
    function printKachel($text){
        echo "<div class=\"post\">";
        echo "<p>" . $text . "</p>";
        echo "<p>erstellt um " . date("H:i:s") . "</p>";
        echo "</div>";
    }

    #Diese Funktíon erstellt eine fertige Überschrift. Es muss nur der Inhalt als Parameter übergeben werden.
    function printHeader($string){
        echo "<h1 style=\"color: blue;\">" . $string . " - Uhrzeit: " . date("h:i:s") . "</h1>";
    }
?>