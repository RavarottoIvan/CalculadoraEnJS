function sumar(){
    const forma = document.getElementById("forma");
    let A = forma["A"];
    let B = forma["B"];
    let resultado = parseInt(A.value) + parseInt(B.value);
    if(isNaN(resultado)){
        resultado = "La operación no incluye números"
    }else{
        document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
    }
}
