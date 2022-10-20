var escolha = prompt("Escolha uma opção entre: -Papel -Pedra -Tesoura").toUpperCase();
var escolhanum = 0;
var pcnum = Math.random();
var pc = "";

if (escolha == "PAPEL"){
    escolhanum = 0.33;
}
else if(escolha == "PEDRA"){
    escolhanum = 0.66;
}
else if(escolha == "TESOURA"){
    escolhanum = 0.99;
}

if (pcnum <= 0.33){
    pc = "PAPEL";
}
else if(pcnum <= 0.66){
    pc = "PEDRA";
}
else if(pcnum <= 0.99){
    pc = "TESOURA";
}

alert("Você escolheu: " + escolha);
alert("Adversário escolheu: " + pc);

if (pcnum <= 0.33 && escolhanum == 0.33) {
    alert("EMPATE!")
}
else if(pcnum <= 0.33 && escolhanum == 0.66){
    alert("ADVERSÁRIO GANHOU!")
}
else if(pcnum <= 0.33 && escolhanum == 0.99){
    alert("VOCÊ GANHOU!")
}
else if(pcnum <= 0.66 && escolhanum == 0.33){
    alert("VOCÊ GANHOU!")
}
else if(pcnum <= 0.66 && escolhanum == 0.66){
    alert("EMPATE!")
}
else if(pcnum <= 0.66 && escolhanum == 0.99){
    alert("ADVERSÁRIO GANHOU!")
}
else if(pcnum <= 0.99 && escolhanum == 0.33){
    alert("ADVERSÁRIO GANHOU!")
}
else if(pcnum <= 0.99 && escolhanum == 0.66){
    alert("VOCÊ GANHOU!")
}
else if(pcnum <= 0.99 && escolhanum == 0.99){
    alert("EMPATE!")
}