function Exercicio3(){

    let base= Number(document.getElementById("bartho").value);
    let altura= Number(document.getElementById("toby").value);
    
    let resultado = (base * altura )/2;
    
    document.getElementById("resultado").innerHTML = "A área do triângulo é: " + resultado.toFixed(2);
    }