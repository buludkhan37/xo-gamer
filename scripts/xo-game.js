let xoSettings = {
    height: 3,
    width: 3,
    playerSide: "X",
    botSide: "O",
}
let table;
document.getElementById("buttonX").addEventListener("click", choice);
document.getElementById("buttonO").addEventListener("click", choice);
function tableOnClick(event) {
    let target = event.target;
    if (target.className != "xo" || target.innerHTML != "" || won(xoSettings.playerSide) || won(xoSettings.botSide)) return;
    target.innerHTML = xoSettings.playerSide;


    if (xoSettings.playerSide == won(xoSettings.playerSide)) {
        console.log(xoSettings.playerSide + '\tWin');
        return;
    }

    if (draw()) {
        console.log('Draw');
        return;
    }

    while (true) {
        let x = random(3);
        let y = random(3);

        if (table.rows[x].cells[y].innerHTML != "") continue;
        table.rows[x].cells[y].innerHTML = xoSettings.botSide;
        break;
    }

    if (xoSettings.botSide == won(xoSettings.botSide)) {
        console.log(xoSettings.botSide + '\tWin');
        return;
    }

}

function random(max) {
    return Math.floor(Math.random() * max);
}

function won(str) {
    if (table.rows[0].cells[0].innerHTML == str
        && table.rows[1].cells[1].innerHTML == str
        && table.rows[2].cells[2].innerHTML == str
        || table.rows[2].cells[0].innerHTML == str
        && table.rows[1].cells[1].innerHTML == str
        && table.rows[0].cells[2].innerHTML == str) return str;

    for (let i = 0; i < 3; i++) {
        if (table.rows[i].cells[0].innerHTML == str
            && table.rows[i].cells[1].innerHTML == str
            && table.rows[i].cells[2].innerHTML == str
            || table.rows[0].cells[i].innerHTML == str
            && table.rows[1].cells[i].innerHTML == str
            && table.rows[2].cells[i].innerHTML == str) return str;
    }
}

function draw() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (table.rows[i].cells[j].innerHTML != "") {
                continue;
            }
            else {
                return;
            }
        }
    }
    return true;
}

function choice(event) {
    table = document.createElement('table');
    table.addEventListener("click",tableOnClick);
    for (let i = 0; i < 3; i++) {
        let tr = document.createElement("tr");
        table.append(tr);

        for (let j = 0; j < 3; j++) {
            let td = document.createElement("td");
            tr.append(td);
            td.className = "xo";
        }
    }
    table.className = "xo-field";
    let game = document.querySelector(".xo-game");
    game.append(table);
    document.querySelector(".xo-form").style.visibility = "hidden";
    let target = event.target;
    if (target.id == "buttonX"){
        xoSettings.playerSide = "X";
        xoSettings.botSide = "O";
    }
    else if (target.id = "buttonO"){
        xoSettings.playerSide = "O";
        xoSettings.botSide = "X";
        let x = random(3);
        let y = random(3);

        if (table.rows[x].cells[y].innerHTML != "");
        table.rows[x].cells[y].innerHTML = xoSettings.botSide;
    }
    
}