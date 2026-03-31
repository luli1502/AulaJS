function Exercicio2(){

let valor= parseFloat(document.getElementById("valor").value);
let taxa= parseFloat(document.getElementById("taxa").value);
let tempo= parseFloat(document.getElementById("tempo").value);

let parcela = valor + (valor *((taxa*taxa)/100)* tempo);

document.getElementById("resultado").innerHTML = "Valor da parcela: R$ " + parcela.toFixed(2);
}