<?php

$curl = curl_init();

curl_setopt_array($curl, [
    CURLOPT_URL => "https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=Washington%2CDC%2CUSA&unitGroup=us&shortColumnNames=false",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => [
        "X-RapidAPI-Host: visual-crossing-weather.p.rapidapi.com",
        "X-RapidAPI-Key: e9f2824844mshc1c978f851f7e8cp1c72f2jsn9da392e99904"
    ],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
    echo "cURL Error #:" . $err;
} else {
    // Verarbeiten der JSON-Antwort
    $weatherData = json_decode($response, true);

    // Überprüfen, ob Daten vorhanden sind
    if(isset($weatherData['days']) && count($weatherData['days']) > 0) {
        $weatherDay = $weatherData['days'][0]; // Ersten Tag auswählen (heute)

        // Beispiel: Wetterdaten für heute anzeigen
        $date = $weatherDay['datetime'];
        $tempMax = $weatherDay['tempmax'];
        $tempMin = $weatherDay['tempmin'];
        $precip = $weatherDay['precip'];
        $humidity = $weatherDay['humidity'];
        $windspeed = $weatherDay['windspeed'];
        $weatherdesc = $weatherDay['conditions'];

        echo "<h1>Wettervorhersage für Washington, DC am $date</h1>";
        echo "<p>Maximale Temperatur: $tempMax °F</p>";
        echo "<p>Minimale Temperatur: $tempMin °F</p>";
        echo "<p>Niederschlagswahrscheinlichkeit: $precip %</p>";
        echo "<p>Luftfeuchtigkeit: $humidity %</p>";
        echo "<p>Windgeschwindigkeit: $windspeed mph</p>";
        echo "<p>Wetterbeschreibung: $weatherdesc</p>";
    } else {
        echo "Keine Wetterdaten gefunden.";
    }
}
?>
