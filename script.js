
console.log("Esta é uma mensagem exibida no console do navegador.");

alert("Esta é uma mensagem exibida através de um arquivo JavaScript externo.");

function somarNumeros() {
   var num1 = parseFloat(prompt("Digite o primeiro número:"));
   var num2 = parseFloat(prompt("Digite o segundo número:"));
   var resultado = num1 + num2;
   alert("A soma dos números é: " + resultado);
}

function exibirNome() {
   var nomeCompleto = document.getElementById("nomeCompleto").value;
   alert("O nome completo é: " + nomeCompleto);
}