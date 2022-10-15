// na telinha 

function calcularCircunferencia(){
    var raio1= document.getElementById('raio1').value
    var pi= 3.14;

    if (raio1 <=0 ) {
        document.getElementById('resposta1').innerHTML = `<p class='erro'> ERRO! O raio não pode ser menor ou igual a 0 (ZERO) </p>`  
    } else {
        document.getElementById('resposta1').innerHTML = `<p class='boa'>A circunferência é ${raio1*2*pi}`
    }
}

function calcularArea() {
    var raio2 = document.getElementById('raio2').value 
    var pi = 3.14;

    if (raio2 <=0 ) {
        document.getElementById('resposta2').innerHTML = `<p class='erro'> ERRO! O raio não pode ser menor ou igual a 0 (ZERO) </p>`  
    } else {
        document.getElementById('resposta2').innerHTML = `<p class='boa'>A área é ${pi*raio2**2}`
    }
}