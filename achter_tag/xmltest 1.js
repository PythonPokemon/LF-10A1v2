let meineXML;
let meineUnparsedXML;

function meinAnfragenFunktion(){
    const meineAnfragenMaschine = new XMLHttpRequest();
    meineAnfragenMaschine.onload = function(){
        meineXML = meineAnfragenMaschine.responseXML;
        meineUnparsedXML = meineAnfragenMaschine.response;
        console.log(meineXML);
        console.log(meineUnparsedXML);

        document.getElementById('output').value = meineXML.getElementsByTagName('beschreibung')[1].textContent;
    }
    meineAnfragenMaschine.open("GET", "data.xml");
    meineAnfragenMaschine.send();
}

document.querySelector('#button1').addEventListener('click', meinAnfragenFunktion);