var I                   = 0;
var SomaIdade           = 0;
var PessoaVelha         = 0;
var Idade               = 0;
var PessoaNova          = 0;
var OpiniaoPessimo      = 0;
var OpiniaoBomOtimo     = 0;
var PorcentagemBomOtimo = 0;
var MediaIdade          = 0;
var QtdePessoas         = 0;
for (I = 0; I < 45; I++) {
    var Idade   = parseInt(prompt("Qual é a sua idade? "));
    var Sexo    = prompt("Qual é o seu sexo? Masculino / Feminino");
    var Opiniao = parseInt(prompt("Qual é a sua opinião:\n1 - Péssimo\n2 - Ruim\n3 - Bom\n4 - Ótimo"));

    SomaIdade   = SomaIdade + Idade;
    if (Opiniao == 4 || Opiniao == 3) {
        OpiniaoBomOtimo = OpiniaoBomOtimo + 1;
    }
    if (Opiniao == 1) {
        var OpiniaoPessimo = OpiniaoPessimo + 1;
    }
    if (I == 0) {
        PessoaVelha = Idade;
        PessoaNova = Idade;
    }
    else if (Idade > PessoaVelha) {
        PessoaVelha = Idade;
    }
    else if (Idade < PessoaNova && Idade != 0) {
        PessoaNova = Idade;
    }
}
var PorcentagemBomOtimo = (OpiniaoBomOtimo / I) * 100;
var MediaIdade = SomaIdade / I;
var QtdePessoas = I;
alert("Média de idade das pessoas: " + MediaIdade + 
        "\n" + "Pessoa mais velha: " + PessoaVelha +
        "\n" + "Pessoa mais nova: " + PessoaNova + 
        "\n" + "Quantidade de pessoas que responderam péssimo: " + OpiniaoPessimo +
        "\n" + "Porcentagem de pessoas que responderam bom ou ótimo: " + PorcentagemBomOtimo + "%" + 
        "\n" + "Total de pessoas que responderam: " + QtdePessoas);