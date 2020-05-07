let table = document.getElementById('00');
let x = "X";
let o = "O";
table.onclick = function (event) {
    let target = event.target;
    if (target.className != "xo" || target.innerHTML != "" || won(x) || won(o)) return;
    target.innerHTML = x;

    if (x == won(x)){
        console.log('x Win');
        return;
    }

    if (draw()){
        console.log('Draw');
        return;
    }

    while (true) {
        let x = random(3);
        let y = random(3);
        let newId = x + "_" + y;

        if (document.getElementById(newId).innerHTML != "") continue;
        document.getElementById(newId).innerHTML = o;
        break;
    }

    if (o == won(o)){
        console.log('o Win');
        return;
    }

}
function random(max) {
    return Math.floor(Math.random() * max);
}
function won(str){
    if ( table.rows[0].cells[0].innerHTML == str 
        && table.rows[1].cells[1].innerHTML == str 
        && table.rows[2].cells[2].innerHTML == str 
        || table.rows[2].cells[0].innerHTML == str 
        && table.rows[1].cells[1].innerHTML == str 
        && table.rows[0].cells[2].innerHTML == str) return str;
    
    for (let i = 0; i < 3; i++){
        if (table.rows[i].cells[0].innerHTML == str 
        && table.rows[i].cells[1].innerHTML == str 
        && table.rows[i].cells[2].innerHTML == str 
        || table.rows[0].cells[i].innerHTML == str 
        && table.rows[1].cells[i].innerHTML == str 
        && table.rows[2].cells[i].innerHTML == str) return str;
    }
}
function draw(){
   for (let i = 0; i < 3; i++){
      for (let j = 0; j < 3; j++){
          if (table.rows[i].cells[j].innerHTML != ""){
              continue;
          }
          else {
              return;
          }
      } 
   }
   return true;
}