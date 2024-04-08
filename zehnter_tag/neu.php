<!doctype html>
<html>
    <head>
        <meta charset="utf8">
        <style>
            .post{
                border-style: solid;
                background-color: red;
                margin: 0.5em;
                padding: 0.5em;
            }
        </style>
    </head>
    <body>
        <?php  
            // Einbinden des externen Skripts "externesphp.inc"
            // Dateiendung spielt keine Rolle, häufig ist .inc anzutreffen
            include "externesphp.inc"; ?>

        <!-- Nutzen der printHeader-Funktion aus der externesphp.inc -->
        <?php printHeader("Blog") ?>
        <div class="one">
        <?php            
            $meineVar = "Mond";
            
            //Nutzen der fertigen Funktionen aus der "externesphp.inc"-Datei
            //Die Funktion "printKachel" hat einen Parameter. Das heißt es muss ein Wert (hier zum Beispiel "Hallo") an die Funktion übergeben werden.
            printKachel("Hallo");        
            printKachel("World");
            printKachel("Heute ist Freitag");

        ?>
        </div>
        <!-- trenner.inc beinhaltet keine Funktionen sonder direkte Befehle zur Ausgabe -->
        <!-- Hier wird dann direkt ein neuer Container in die HTML-Seite eingefügt. -->
        <?php  include "trenner.inc"; ?> 
        <div class="two">
            <?php 
                //Vorher definierte Funktionen können über die Grenzen der php-Blöcke, also über all und in jedem php-Block verwendet werden.
                printKachel("Sonne");      
                //Verwenden der Variabel $meineVar aus dem letzten php-Block          
                printKachel($meineVar);                
            ?>

        </div>
    </body>
</html>

