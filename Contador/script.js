function contador() {
    let segundos = +document.querySelector("#segundos").value;
    setTimeout(finalizar, segundos*1000);
    let tiempo = document.querySelector("#tiempo");
    let tempo = segundos;
    tiempo.textContent = tempo;
    const intervalID = setInterval(temporizador, 1000);
}

function temporizador(){
    tiempo.textContent -= 1;
}

function finalizar(){
    let mostrar = document.querySelector("#mostrar").textContent = "ON";
    let alarma = document.querySelector("#alarma");
    alarma.play();
}

function reiniciar() {
    location.reload();
}
