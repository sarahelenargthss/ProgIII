function calcularFatorial() {
    var num = parseFloat(document.getElementById("numero").value);

    if (isNaN(num)){
        alert("O valor não é um número!");
        return;
    }else if (num < 0){
        alert("Digite um número positivo!");
    }

    var resultado = document.getElementById("resultado")
    resultado.innerText = "Resultado: " + fatorial(num);
}

function fatorial(num){
    if(num <= 1) {
        return 1;
    }

    return num * (fatorial(num - 1));
}