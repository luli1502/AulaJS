function calcular() {
    
    let valorkm = Number (document.getElementById ("valorkm").value)
    let km= Number(document.getElementById("km").value);
    let minutos= Number(document.getElementById("minutos").value);

    let total = (valorkm * km) + (minutos*0,50);

    document.getElementById("resultado").innerHTML = "Total: R$ " + total;
}