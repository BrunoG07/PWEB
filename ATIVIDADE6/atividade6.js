var nome = prompt("Digite seu nome:");
var nota1 = parseFloat(prompt("Digite a nota da sua primeira prova:"));
var nota2 = parseFloat(prompt("Digite a nota da sua segunda prova:"));
var nota3 = parseFloat(prompt("Digite a nota da sua trceira nota:"));

var media = (nota1 + nota2 + nota3)/3;

alert("Nome do Aluno: " + nome + "\nNota da 1ª Prova: " + nota1 + "\nNota da 2ª Prova: " + nota2 + "\nNota da 3ª Prova: " + nota3 + "\nSua média é: " + media.toFixed(2));

confirm("Sua média está de acordo?");
