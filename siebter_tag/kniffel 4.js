var counter = 2
var roles = 0

function roleDice(){
    if(roles < 3){
        for(let i = 1; i < 6; i++){
            if(!document.getElementsByClassName("dice")[i - 1].checked){
                document.getElementById("box_d" + i).value = Math.floor(Math.random() * 10) % 6 + 1;
            }
        }
        roles++;
        document.getElementById("role_dice").innerText = "würfeln (" + (3 - roles) + ")";
    }
}

function addCol(){
    var table = document.getElementById("field");
    var rows = table.rows;
    var th = document.createElement("th");
    th.innerText = counter++ + ". Spiel";
    th.className = "inactive";
    rows[0].appendChild(th);
    for (let i = 1; i < rows.length; i++) {
        rows[i].cells[rows[i].cells.length - 1].className = "inactive";
        var td = document.createElement("td");
        td.className = "active";
        rows[i].appendChild(td);
    }
}

function resetDice(){
    for(let i = 1; i < 6; i++){
        document.getElementById("box_d" + i).value = "-";
        document.getElementById("d" + i).checked = false;
    }
    roles = 0;
    document.getElementById("role_dice").innerText = "würfeln (3)";
}