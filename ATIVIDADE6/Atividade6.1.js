var num1 = parseFloat(prompt("Digite o primeiro numero:"));
var num2 = parseFloat(prompt("Digite o segundo numero:"));

var soma = num1 + num2;
var subtracao = num1 - num2;
var produto = num1 * num2;
var divisao = num1 / num2;
var resto = num1 % num2;

alert("Numero 1: " + num1 + "\nNumero 2: " + num2 + "\nSoma: " + soma.toFixed(2) + "\nSubtração: " + subtracao.toFixed(2) + "\nProduto: " + produto.toFixed(2) + "\nDivisao: " + divisao.toFixed(2) + "\nResto: " + resto.toFixed(2));

confirm("Os calculos estão corretos?");