function Exercicio4(){

    let lado= Number(document.getElementById("bartho").value);
    
    
    let resultado = lado * lado;
    
    document.getElementById("resultado").innerHTML = "A área do quadrado é: " + resultado;
    }