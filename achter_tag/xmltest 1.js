let meineXML;
let meineUnparsedXML;

function meinAnfragenFunktion(){
    const meineAnfragenMaschine = new XMLHttpRequest();
    meineAnfragenMaschine.onload = function(){
        meineXML = meineAnfragenMaschine.responseXML;
        meineUnparsedXML = meineAnfragenMaschine.response;
        console.log(meineXML);
        console.log(meineUnparsedXML);

        // Hier passen wir den Code an, um auf die "class.xml" zuzugreifen und den gewünschten Inhalt abzurufen
        const klasseLF10a = meineXML.getElementsByTagName('klasse')[0];
        const personen = klasseLF10a.getElementsByTagName('person');
        const firstName = personen[0].getElementsByTagName('firstname')[0].textContent;
        const lastName = personen[0].getElementsByTagName('lastname')[0].textContent;
        const city = personen[0].getElementsByTagName('city')[0].textContent;
        const country = personen[0].getElementsByTagName('country')[0].textContent;
        const codename = personen[0].getElementsByTagName('codename')[0].textContent;
        const email = personen[0].getElementsByTagName('email')[0].textContent;

        // Beispielhaft zeigen wir den ersten Eintrag der XML in der Konsole
        console.log("First Name:", firstName);
        console.log("Last Name:", lastName);
        console.log("City:", city);
        console.log("Country:", country);
        console.log("Codename:", codename);
        console.log("Email:", email);
    }
    meineAnfragenMaschine.open("GET", "class.xml"); // Ändern Sie den Pfad zu class.xml
    meineAnfragenMaschine.send();
}

document.querySelector('#button1').addEventListener('click', meinAnfragenFunktion);
