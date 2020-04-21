function calcular(params) {
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var n3 = parseFloat(document.getElementById("n3").value);

    if(isNaN(n1)){
        alert("O campo Número 1 não orresponde a um número!");
        return;
    }
    if(isNaN(n2)){
        alert("O campo Número 2 não orresponde a um número!");
        return;
    }
    if(isNaN(n3)){
        alert("O campo Número 3 não orresponde a um número!");
        return;
    }

    var soma = n1 + n2 + n3;
    if(soma % 2 == 0){
        alert("A soma dos itens é igual a " + soma + ", um número par");
    }else{
        alert("A soma dos itens é igual a " + soma + ", um número ímpar");
    }
}