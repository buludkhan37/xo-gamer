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
        result("YOU WON");
        return;
    }

    if (draw()) {
        result("DRAW");
        return;
    }

    drowBot();

    if (draw()) {
        result("DRAW");
        return;
    }

    if (xoSettings.botSide == won(xoSettings.botSide)) {
        result("YOU LOSE");
        return;
    }
}

function drowBot() {
    while (true) {
        let x = random(3);
        let y = random(3);

        if (table.rows[x].cells[y].innerHTML != "") continue;
        table.rows[x].cells[y].innerHTML = xoSettings.botSide;
        break;
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
    let newGame = document.getElementById("newGame");
    let res = document.getElementById("result");
    if (table) {
        table.remove();
    }

    if (newGame) {
        newGame.remove();
    }

    if (res) {
        res.remove();
    }

    table = document.createElement('table');
    table.addEventListener("click", tableOnClick);

    for (let i = 0; i < xoSettings.height; i++) {
        let tr = document.createElement("tr");
        table.append(tr);

        for (let j = 0; j < xoSettings.width; j++) {
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
    if (target.id == "buttonX") {
        xoSettings.playerSide = "X";
        xoSettings.botSide = "O";
    } else if (target.id = "buttonO") {
        xoSettings.playerSide = "O";
        xoSettings.botSide = "X";
        drowBot();
    }

}

function createXOButton() {
    let buttXO = document.createElement("input");
    buttXO.setAttribute("type", "button");
    buttXO.setAttribute("value", "New Game");
    buttXO.setAttribute("id", "newGame");
    buttXO.className = "newGame";           
    table.after(buttXO);
    buttXO.addEventListener("click", function () {
        document.querySelector(".xo-form").style.visibility = "visible";
    });
}

function result(message) {
    let result = document.createElement("div");
    result.setAttribute("id", "result");
    result.setAttribute("class", "resXO");
    result.innerHTML = message;
    table.after(result);
    createXOButton();
}

