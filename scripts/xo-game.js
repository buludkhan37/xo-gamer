let table = document.getElementById('00');
table.onclick = function (event) {
    if (event.target.className != "xo" || event.target.innerHTML == "O" || event.target.innerHTML == "X" || won() || loose()) return;
    event.target.innerHTML = "X";

    
   
    while (true) {
        let x = random(3);
        let y = random(3);
        let newId = x + "_" + y; 
        console.log(document.getElementById(newId));

        if (document.getElementById(newId).innerHTML != "") continue;
        document.getElementById(newId).innerHTML = "O";
        break;
    }



}
function random(max) {
    return Math.floor(Math.random() * max);
}
function won(){
    if ( table.rows[0].cells[0].innerHTML == "X" 
        && table.rows[0].cells[1].innerHTML == "X" 
        && table.rows[0].cells[2].innerHTML == "X" 
        || table.rows[1].cells[0].innerHTML == "X" 
        && table.rows[1].cells[1].innerHTML == "X" 
        && table.rows[1].cells[2].innerHTML == "X" 
        || table.rows[2].cells[0].innerHTML == "X" 
        && table.rows[2].cells[1].innerHTML == "X" 
        && table.rows[2].cells[2].innerHTML == "X" 
        || table.rows[0].cells[0].innerHTML == "X" 
        && table.rows[1].cells[0].innerHTML == "X" 
        && table.rows[2].cells[0].innerHTML == "X" 
        || table.rows[0].cells[1].innerHTML == "X" 
        && table.rows[1].cells[1].innerHTML == "X" 
        && table.rows[2].cells[1].innerHTML == "X" 
        || table.rows[0].cells[2].innerHTML == "X" 
        && table.rows[1].cells[2].innerHTML == "X" 
        && table.rows[2].cells[2].innerHTML == "X" 
        || table.rows[0].cells[0].innerHTML == "X" 
        && table.rows[1].cells[1].innerHTML == "X" 
        && table.rows[2].cells[2].innerHTML == "X" 
        || table.rows[2].cells[0].innerHTML == "X" 
        && table.rows[1].cells[1].innerHTML == "X" 
        && table.rows[0].cells[2].innerHTML == "X") return true;
    
    return false;

}
function loose(){
    if ( table.rows[0].cells[0].innerHTML == "O" 
        && table.rows[0].cells[1].innerHTML == "O" 
        && table.rows[0].cells[2].innerHTML == "O" 
        || table.rows[1].cells[0].innerHTML == "O" 
        && table.rows[1].cells[1].innerHTML == "O" 
        && table.rows[1].cells[2].innerHTML == "O" 
        || table.rows[2].cells[0].innerHTML == "O" 
        && table.rows[2].cells[1].innerHTML == "O" 
        && table.rows[2].cells[2].innerHTML == "O" 
        || table.rows[0].cells[0].innerHTML == "O" 
        && table.rows[1].cells[0].innerHTML == "O" 
        && table.rows[2].cells[0].innerHTML == "O" 
        || table.rows[0].cells[1].innerHTML == "O" 
        && table.rows[1].cells[1].innerHTML == "O" 
        && table.rows[2].cells[1].innerHTML == "O" 
        || table.rows[0].cells[2].innerHTML == "O" 
        && table.rows[1].cells[2].innerHTML == "O" 
        && table.rows[2].cells[2].innerHTML == "O" 
        || table.rows[0].cells[0].innerHTML == "O" 
        && table.rows[1].cells[1].innerHTML == "O" 
        && table.rows[2].cells[2].innerHTML == "O" 
        || table.rows[2].cells[0].innerHTML == "O" 
        && table.rows[1].cells[1].innerHTML == "O" 
        && table.rows[0].cells[2].innerHTML == "O") return true ;
    
    return false;
}
function draw(){
   
}