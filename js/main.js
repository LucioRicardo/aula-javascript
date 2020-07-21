var idade = prompt("Qual sua idade?");
var validar;

function clique(){
    alert("Obrigado por clicar!")
}

function validaIdade(idade){
    validar;
    if(idade >= 18){
        validar = true;
    }else {
        validar = false;
    }

    return validar;
}

validaIdade(idade);
console.log(validar);

if(idade >= 18) {
    alert("Maior de idade.");
}else {
    alert("Menor de idade.");
}

var count = 0;
while(count <= 5){
    console.log(count);
    count++;
}

function trocar(){
    document.getElementById("mousemove").innerHTML = "Tire o mouse daqui!";
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Este é o cabeçalho.";
}