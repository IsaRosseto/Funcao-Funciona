//Na telinha 
function calcularMeuLanche (){
    var idade = document.getElementById('idade').value
    var lanchinho = document.getElementById('lanchinho').value
    var quantidade_de_lanches = document.getElementById('quantasvezes').value
    var expectativa_de_vida = 72;

    var conta_suplimentos = (expectativa_de_vida - idade) * quantidade_de_lanches * 365;

    if(idade <= 0 && lanchinho == '' && quantidade_de_lanches == ""){
        document.getElementById('resposta').innerHTML = `<p class='erro'> ERRO! Preencha todos os campos corretamente. </p>`  
    } else{
        document.getElementById('resposta').innerHTML = `<p class='boa'> Voce precisara de  ${conta_suplimentos} ${lanchinho} para durar até a idade  ${expectativa_de_vida} .</p>`
    }
}



// Alert fofo
//function calcularMeuLanche (){
//    var idade = parseInt (prompt( "Qual a sua idade?"));
//    var quantidade_de_lanches = parseInt(prompt( " Quantas vezes por dia voce comeria isso?"))
//    var expectativa_de_vida = 72;
//    var conta_suplimentos = (expectativa_de_vida - idade) * quantidade_de_lanches * 365;
//   alert ("Voce precisara de " + conta_suplimentos + " para durar até a idade " + expectativa_de_vida);
// } 