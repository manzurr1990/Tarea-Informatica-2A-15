const pantalla = document.getElementById("pantalla");
let primer_operador;
let segundo_operador;
let resultado;
let operacion;

function agregar_numero(numero) {
  pantalla.value += numero;
}

function eliminar_pantalla() {
  pantalla.value = "";
  primero_operador = "0";
  segundo_operador = "0";
  resultado = "0";
  operacion = "";
}

function cambio_operacion(op) {
  if (primer_operador === "" || resultado !== "") {
    primer_operador = parseFloat(pantalla.value);
    resultado = "";
  } else if (operacion !== "" && segundo_operador !== "") {
    resolver();
  }
  operacion = op;
  pantalla.value += " " + operacion + " ";
}

function resolver() {
  segundo_operador = parseFloat(pantalla.value.split(operacion)[1]);
  switch (operacion) {
    case '+':
      resultado = primer_operador + segundo_operador;
      break;
    case '-':
      resultado = primer_operador - segundo_operador;
      break;
    case '*':
      resultado = primer_operador * segundo_operador;
      break;
    case '/':
      if (segundo_operador == 0){
          alert("No puedes dividir entre cero.");
          return;
      }
      resultado = primer_operador / segundo_operador;
      break;
  }
  pantalla.value = `${resultado}`;
  primer_operador = resultado;
  segundo_operador = "";
  operacion = "";
}

function eliminar() {
  let value = pantalla.value;
  pantalla.value = value.substr(0, value.length - 1);
}

