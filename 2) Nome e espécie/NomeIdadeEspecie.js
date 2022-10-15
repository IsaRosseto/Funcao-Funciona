

//Na telinha
function IdadePetConversão () {

    var idade = document.getElementById('idade').value
    var nome = document.getElementById('nome').value
    var especie = document.getElementById('especie').value

    if(idade <= 0 && nome == '' && especie == ""){
        document.getElementById('resposta').innerHTML = `<p class='erro'> ERRO! Preencha todos os campos corretamente. </p>`  
    } else{
        document.getElementById('resposta').innerHTML = `<p>Seu pet tem ${idade * 7} anos em anos humanos! , se chama ${nome} e é da especie ${especie} </p>`
    }
}



//Em alert 
//function IdadePetConversão () {
//     var idade = parseInt(prompt("Digite a idade do seu pet"));
//     var nome = (prompt("Como o seu pet se chama?"));
//     var especie = (prompt("Qual a especie do seu pet ?"))
//     if( idade <= 0 && nome == '' && especie == ""){
//        alert ("ERRO! Preencha todos os campos corretamente");
//    } else {
//        alert ("Seu pet tem " + (idade*7) + " anos em anos humanos, se chama " + nome + " e é da especie " + especie + ".");
//    }
//}