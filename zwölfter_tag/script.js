$(document).ready(function() {
    // Daten von der PHP-Datei abrufen
    $.getJSON("weather.php", function(data) {
        var weatherData = data.weatherData;
        var city = data.city;

        // Wetterdaten anzeigen
        var output = "<h2>" + city + "</h2>";
        $.each(weatherData, function(key, weather) {
            output += "<div>";
            output += "<img src='http://openweathermap.org/img/wn/" + weather.icon + ".png'>";
            output += "<p>" + weather.description + "</p>";
            output += "<p>Temperatur: " + weather.temp + " °C</p>";
            output += "<p>Luftfeuchtigkeit: " + weather.humidity + "%</p>";
            output += "<p>Windgeschwindigkeit: " + weather.wind_speed + " m/s</p>";
            output += "</div>";
        });

        $("#weatherData").html(output);
    });
});
