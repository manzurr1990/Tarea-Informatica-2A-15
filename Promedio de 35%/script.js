function Calcular() {
    const primera_nota = document.getElementById('primera_nota').value;
    const segunda_nota = document.getElementById('segunda_nota').value;
    const tercera_nota = document.getElementById('tercera_nota').value;
    const resultado = document.getElementById('resultado');
    const porcentaje_nota_1 = 15/10;
    const porcentaje_nota_2 = 10/10;
    let proceso;
    if (primera_nota >= 1 && primera_nota <= 10 && segunda_nota >= 1 && segunda_nota <= 10 && tercera_nota >= 1 && tercera_nota <= 10) {
        proceso = (primera_nota*porcentaje_nota_1) + ((segunda_nota*porcentaje_nota_2) + (tercera_nota*porcentaje_nota_2));
        resultado.textContent = proceso+"%";
    } else  {
        alert("No es un valor correcto de nota o no ingresado datos, vuelve a intentarlo");
    }
   
}

