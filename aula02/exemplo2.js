function Exemplo2()
{
    let numero = Number( document.getElementById("numero").value);

    let qudrado, cubo;
    quadrado = numero * numero;
    cubo = numero * numero * numero;

    document.getElementById("resultado").innerHTML = 
    "<p>O quadrado do núemro é " + quadrado + " e o cubo é " + cubo + "</p>";
}