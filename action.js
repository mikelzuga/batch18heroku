function saludo() {
  var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];
  var boxes = "";
  for (i=0; i<abc.length; i++){
    boxes+= "<div class='col-md-3 caja'>" + abc[i] + "</div>";
  }
console.log(boxes);
document.getElementById('cajas').innerHTML = boxes;

}

function hola() {
  var holaa="";

   holaa = "<h1 class='hola'>HOLA!!</h1>";

  document.getElementById('hola').innerHTML = holaa;

}
