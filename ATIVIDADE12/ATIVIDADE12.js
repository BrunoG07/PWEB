
document.onload = function FecharJanela() {
    document.getElementById("imagem").src = "janela_fechada.jpg";
}

document.onmouseover = function AbrirJanela() {
    document.getElementById("imagem").src = "janela_aberta.png";
}

document.onclick = function QuebrarJanela() {
    document.getElementById("imagem").src = "janela_quebrada.jfif";
}

document.onmouseout = function FecharJanela() {
    document.getElementById("imagem").src = "janela_fechada.jpg";
}