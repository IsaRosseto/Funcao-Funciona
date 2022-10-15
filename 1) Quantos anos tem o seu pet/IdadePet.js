
// Na telinha
function IdadePetConversão () {
    var idade = document.getElementById('idade').value
    if(idade <=0) {
        document.getElementById('resposta').innerHTML = `<p class="erro"> A idade do pet não pode ser menor ou igual a zero. Tente novamente!.</p>`
    } else {
        document.getElementById('resposta').innerHTML = `<p class="conversão"> Seu pet tem ${idade * 7} anos em anos de humanos</p`
    }
}


// Em alert
//function IdadeDoPet () {
//    var conversão = (idade*7)
//    var idade= parseInt(prompt("Qual a idade do seu pet?"));
//
//    if (idade <= 0) {
//        alert (" A idade do seu pet não pode ser menor ou igual a Zero. Tente novamente!")
//    } else {
//        alert (" Seu pet tem "+ (idade * 7) + "anos em anos Humanos")
//    }
//}