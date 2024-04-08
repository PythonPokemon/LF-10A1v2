<?php
// Simulierte Datenbankabfrage
$studentData = array(
    array("name" => "Max Mustermann", "klasse" => "12A", "last_login" => "2024-04-08 10:30:00"),
    array("name" => "Anna Schmidt", "klasse" => "11B", "last_login" => "2024-04-07 15:45:00"),
    // Weitere Schülerdaten hier hinzufügen...
);

// Aktuelle Zeit in Deutschland (GMT+2 im Sommer, GMT+1 im Winter)
date_default_timezone_set('Europe/Berlin');
$current_time = date("Y-m-d H:i:s");

// Daten als JSON ausgeben
echo json_encode(array("studentData" => $studentData, "current_time" => $current_time));
?>
