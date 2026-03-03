document.write("<h1> Exercício 2 </h1>");

var fahrenheit = prompt ("Digite a temperatura em Fahrenheit:");
var celsius = Number(fahrenheit - 32)  * 5/9;

document.write("<p> A temperatura digitada foi " + fahrenheit + "F°</p>");

document.write ("<p style = 'color: red'> A temperatura em Celsius é " + celsius + "°C</p>");