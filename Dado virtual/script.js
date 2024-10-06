function Solicitar() {
    let maximo = +document.querySelector("#maximo").value;
    let minimo = +document.querySelector("#minimo").value;
    let resultado = document.querySelector("#resultado");
    proceso = Math.floor(Math.random() * (maximo - minimo +1) + minimo);
    resultado.textContent = proceso;
}