
    var num1 = parseInt(prompt("Digite o 1 número: "));
    var num2 = parseInt(prompt("Digite o 2 número: "));
    var num3 = parseInt(prompt("Digite o 3 número: "));
    var nummaior = 0;

    var ordena = [num1, num2, num3];

    function maior(num1, num2, num3) {
        nummaior = Math.max(num1, num2, num3);
        return nummaior;
    }
    
    function ordenar(s) {
        var x = s.slice(0);
        return x.sort(function(a, b){return a - b});
    }
    alert("O maior número é: " + maior(num1, num2, num3));
    alert("Números ordenados: " + ordenar(ordena));

