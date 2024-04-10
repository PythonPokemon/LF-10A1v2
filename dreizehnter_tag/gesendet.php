<!doctype html>
<html lang="de">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/formular.css">
    
    <title>Gesendet</title>
   
  </head>
  <body>
    <header>
      <h1 id="header-ueber"></h1>
		<nav>
		</nav>
	</header>
	<main>
      <h1>Erfolgreich Gesendet!</h1>
    
      <?php
            $text = "eins";
            $Text = "zwei";
            echo "POST: ";
            echo  var_dump($_POST); //Werte werden in $_POST array gespeichert, falls im Formular method=POST
            echo "<br>";
            echo "GET: ";
            echo var_dump($_GET); //Werte werden in $_POST array gespeichert, falls im Formular method=GET
            echo "<br>";
            // Funktion zur Überprüfung, ob das $_GET-Array einen Eintrag mit "nachricht" hat
            echo "<p>Ueberprüfung, ob Schlüssel vorhanden: " . isset($_GET["nachricht"]) ."</p>";
            // Funktion zur Überprüfung, ob der Inhalt des $_GET-Arrays leer ist
            echo "<p>Ueberprüfung, ob Inhalt vorhanden: " . empty($_GET["nachricht"]) ."</p>";
            // Ausgabe des Inhalts von "nachricht
            echo "<p>Uebermittelte Nachricht: " . $_GET["nachricht"] . "</p>";

        ?>

            

        
	</main>
	<footer>
		<address></address>
	</footer>
  </body>
</html>