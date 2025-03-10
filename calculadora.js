var borrar = false;
var blockDel = false;

function deleteCaracter() {
  var caja2 = document.f1.txtcaja2.value;

  if (blockDel) return;

  if (caja2.length > 1) {
    document.f1.txtcaja2.value = caja2.slice(0, -1);
  } else {
    document.f1.txtcaja2.value = "0";
  }
}
function escribir(n) {
  var caja2 = document.f1.txtcaja2.value;
  if (borrar) {
    document.f1.txtcaja2.value = "";
    borrar = false;
    document.f1.txtcaja2.value = n;
  } else if (caja2 == 0 && n != ".") {
    caja = caja2.replace("0", "");
    document.f1.txtcaja2.value = caja + n;
  } else {
    document.f1.txtcaja2.value = caja2 + n;
  }
}
