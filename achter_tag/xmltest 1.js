let meineXML;

function meinAnfragenFunktion(){
    const meineAnfragenMaschine = new XMLHttpRequest();
    meineAnfragenMaschine.onload = function(){
        if (meineAnfragenMaschine.status >= 200 && meineAnfragenMaschine.status < 400) {
            meineXML = meineAnfragenMaschine.responseXML;

            // Überprüfen, ob XML-Daten erfolgreich geladen wurden
            console.log("XML-Daten geladen:", meineXML);

            // Extrahieren der Klasse LF10a aus der XML
            const klasseLF10a = meineXML.querySelector('klasse[name="LF10a"]');
            const personen = klasseLF10a.getElementsByTagName('person');

            // Extrahieren der Informationen des ersten Eintrags
            const firstName = personen[0].getElementsByTagName('firstname')[0].textContent;
            const lastName = personen[0].getElementsByTagName('lastname')[0].textContent;
            const city = personen[0].getElementsByTagName('city')[0].textContent;
            const country = personen[0].getElementsByTagName('country')[0].textContent;
            const codename = personen[0].getElementsByTagName('codename')[0].textContent;
            const email = personen[0].getElementsByTagName('email')[0].textContent;

            // Anzeigen der Informationen im Textfeld
            document.getElementById('output').value = `
                First Name: ${firstName}
                Last Name: ${lastName}
                City: ${city}
                Country: ${country}
                Codename: ${codename}
                Email: ${email}
            `;
        } else {
            console.error('Fehler beim Abrufen der Daten.');
        }
    };

    // Fehlerbehandlung für die Anfrage
    meineAnfragenMaschine.onerror = function() {
        console.error('Es gab einen Fehler bei der Anfrage.');
    };

    meineAnfragenMaschine.open("GET", "class.xml");
    meineAnfragenMaschine.send();
}

document.querySelector('#button1').addEventListener('click', meinAnfragenFunktion);
