<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<title> PHP Seite</title>		
		
	</head>
	<body>
		<h1>Ueberschrift</h1>
		<h2><?php print("kleine Ueberschrift");	?></h2>
		<p></p>

		<?php 
		
			//meine erste php Zeile
			#php Kommentar	
			print("<article>Hello!</article>");
			print("<span>World.</span>");
			print "<br>";echo "/n";
			print "<span>Mars</span>";
			print "<br>";
			echo "<p>Ich</p>", "<p>liebe</p>", "<p>php.</p>";
			print "<br>";
			echo "<p>Ich</p>";
			echo "<p>liebe</p>";
			echo "<p>php.</p>";
			print "<br>";

			
			echo "<p>" . "Frühstücks" . "pause" . "</p>";
			print "<br>";
			echo "<p>Frühstückspause</p>";
			print "<br>";

			echo 123;
			print "<br>";
			$meineErsteVariabel = "Rüdi";

			echo "<p>" . "Hallo " . $meineErsteVariabel . "! Wie geht's?" . "</p>";

			$zahl = 2;
			$zweiteZahl = 33;
			$ergebnis = $zahl + $zweiteZahl;

			echo "<br>";
			echo "<p>Ergebnis: " . $ergebnis . "</p>";

			echo "<p>Version: " . phpversion() . "</p>";

			$text = "Apfel";
			echo $text;
			echo "<br>";
			echo var_dump($text);

			echo rand(1,6);
			echo "<br>";
			echo round(1.49);
			echo "<br>";


			$meinSatz = "Hallo, ich bin gerne an der Tastatur!";
			echo var_dump($meinSatz);
			echo "<br>";
			echo strlen($meinSatz);
			echo "<br>";

			echo strrev($meinSatz);
			echo "<br>";
			echo "Wörteranzahl: " . str_word_count($meinSatz);
			echo "<br>";
			echo str_replace("Tastatur", "Ostsee", $meinSatz);
			echo "<br>";

			$meinArray = array("Apfel", "Melone");
			echo var_dump($meinArray);
			echo "<br>";
			echo $meinArray[1];
			echo "############";

			$meineKeymap = array("Liebling"=>"Apfel", "Adresse"=>"Hauptstr. 12");
			echo "<br>";
			echo "Aus KeyMap: " . $meineKeymap["Adresse"];
		?>



	</body>
</html>