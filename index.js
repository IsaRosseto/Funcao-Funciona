function IdadePetConversão () {
    var idade = document.getElementById('idade').value
    if(idade <=0) {
        document.getElementById('resposta').innerHTML = `<p class="erro"> A idade do pet não pode ser menor ou igual a zero. Tente novamente!.</p>`
    } else {
        document.getElementById('resposta').innerHTML = `<p class="conversão"> Seu pet tem ${idade * 7} anos em anos de humanos</p`
    }
}


function IdadePetConversão2 () {

    var idade = document.getElementById('idade').value
    var nome = document.getElementById('nome').value
    var especie = document.getElementById('especie').value

    if(idade <= 0 && nome == '' && especie == ""){
        document.getElementById('resposta1').innerHTML = `<p class='erro'> ERRO! Preencha todos os campos corretamente. </p>`  
    } else{
        document.getElementById('resposta1').innerHTML = `<p>Seu pet tem ${idade * 7} anos em anos humanos! , se chama ${nome} e é da especie ${especie} </p>`
    }
}


function calcularMeuLanche (){
    var idade = document.getElementById('idade').value
    var lanchinho = document.getElementById('lanchinho').value
    var quantidade_de_lanches = document.getElementById('quantasvezes').value
    var expectativa_de_vida = 72;

    var conta_suplimentos = (expectativa_de_vida - idade) * quantidade_de_lanches * 365;

    if(idade <= 0 && lanchinho == '' && quantidade_de_lanches == ""){
        document.getElementById('resposta2').innerHTML = `<p class='erro'> ERRO! Preencha todos os campos corretamente. </p>`  
    } else{
        document.getElementById('resposta2').innerHTML = `<p class='boa'> Voce precisara de  ${conta_suplimentos} ${lanchinho} para durar até a idade  ${expectativa_de_vida} .</p>`
    }
}



function calcularCircunferencia(){
    var raio1= document.getElementById('raio1').value
    var pi= 3.14;

    if (raio1 <=0 ) {
        document.getElementById('resposta3').innerHTML = `<p class='erro'> ERRO! O raio não pode ser menor ou igual a 0 (ZERO) </p>`  
    } else {
        document.getElementById('resposta3').innerHTML = `<p class='boa'>A circunferência é ${raio1*2*pi}`
    }
}

function calcularArea() {
    var raio2 = document.getElementById('raio2').value 
    var pi = 3.14;

    if (raio2 <=0 ) {
        document.getElementById('resposta4').innerHTML = `<p class='erro'> ERRO! O raio não pode ser menor ou igual a 0 (ZERO) </p>`  
    } else {
        document.getElementById('resposta4').innerHTML = `<p class='boa'>A área é ${pi*raio2**2}`
    }
}


function converterCelsiusFahrenheit(){
    var celsius = document.getElementById('celsius').value
    document.getElementById('resposta5').innerHTML = `${celsius}° C é igual a ${celsius*1.8+32}° F`
}

function converterFahrenheitCelsius(){
    var fahrenheit = document.getElementById('fahrenheit').value
    document.getElementById('resposta6').innerHTML = ` ${fahrenheit}° F é igual a ${(fahrenheit-32)/1.8}° C`
}



