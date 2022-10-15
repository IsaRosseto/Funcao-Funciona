// na telinha 
function converterCelsiusFahrenheit(){
    var celsius = document.getElementById('celsius').value
    document.getElementById('resposta1').innerHTML = `${celsius}° C é igual a ${celsius*1.8+32}° F`
}

function converterFahrenheitCelsius(){
    var fahrenheit = document.getElementById('fahrenheit').value
    document.getElementById('resposta2').innerHTML = ` ${fahrenheit}° F é igual a ${(fahrenheit-32)/1.8}° C`
}


// Em alert 
//function converterCelsiusFahrenheit(){
//    var celsius = (prompt("Qual a temperatura em Celsius?"));
//    var formula_de_conversão = celsius*1.8+32 ;
//    alert (celsius + "°C é igual a " + formula_de_conversão + "°F .");
//}
//
//function converterFahrenheitCelsius(){
//    var fahrenheit = (prompt("Qual a temperatura em Celsius?"));
//    var formula_de_conversão = (fahrenheit - 32)/1.8 ;
//    alert (fahrenheit + "°F é igual a " + formula_de_conversão + "°C .");
//}




