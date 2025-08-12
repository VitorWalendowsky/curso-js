function exercicio09() {
    let lado1 = parseFloat(prompt("Digite o lado 1:"));
    let lado2 = parseFloat(prompt("Digite o lado 2:"));
    let lado3 = parseFloat(prompt("Digite o lado 3:"));
    let lado4 = parseFloat(prompt("Digite o lado 4:"));
    if (lado1 === lado2 && lado2 === lado3 && lado3 === lado4)
        alert("É um quadrado");
    else
        alert("Não é um quadrado");
}

function exercicio10() {
    let lado1 = parseFloat(prompt("Digite o lado 1:"));
    let lado2 = parseFloat(prompt("Digite o lado 2:"));
    let lado3 = parseFloat(prompt("Digite o lado 3:"));
    let lado4 = parseFloat(prompt("Digite o lado 4:"));
    if (lado1 === lado3 && lado2 === lado4 && lado1 !== lado2)
        alert("É um retangulo");
    else
        alert("Não é um retangulo");
}

function exercicio07() {
    let num = parseInt(prompt("Digite o número para analisar"));
    let mensagem = "";
    if (num === 0) {
        mensagem += "o número é neutro\n";
    } else {
        if (num > 0) {
            mensagem += "o número é positivo\n";
        } else {
            mensagem += "o número é negativo\n";
        } if (num > 10) {
            mensagem += "o número é maior que 10\n"
        } else if (num <= 50) {
            mensagem += "o número é menor ou igual a 50\n"
        } if (num < -10) {
            mensagem += "o número é menor que -10\n"
        } else if (num >= 30) {
            mensagem += "o número é maior ou igual a 30\n"
        } if (num != 1) {
            mensagem += "o número é diferente de 1"
        }
    }
    alert(mensagem)
}

function exercicio14() {
    let n1 = parseFloat(prompt("Insira o primeiro número"));
    let n2 = parseFloat(prompt("Insira o segundo número"));
    let n3 = parseFloat(prompt("Insira o terceiro número"));
    let menor, meio, maior;
    if (n1 <= n2 && n1 <= n3) {
        menor = n1;
        if (n2 <= n3) {
            meio = n2;
            maior = n3;
        } else {
            meio = n3;
            maior = n2;
  }     if (n2 <= n1 && n2 <= n3) {
            menor = n2;
        } if (n1 <= n3) {
            meio = n1;
            maior = n3;
        } else {
            meio = n3;
            maior = n1;
  } if (n3 <= n1 && n3 <= n2) {
            menor = n3;
        } if (n2 <= n1) {
            meio = n2;
            maior = n1;
        } else if(n1 <= n2) {
            meio = n1;
            maior = n2;
        }
    }
    alert("A ordem crescente é:\n" + menor + "," + meio + "," + maior);
}

/*if (n1 <= n2 && n1 <= n3) {
    menor = n1;
    if (n2 <= n3) {
        meio = n2;
        maior = n3;
    } else {
        meio = n3;
        maior = n2;
    }
} else if (n2 <= n1 && n2 <= n3) {
    menor = n2;
    if (n1 <= n3) {
        meio = n1;
        maior = n3;
    } else {
        meio = n3;
        maior = n1;
    }
} else {
    menor = n3;
    if (n1 <= n2) {
        meio = n1;
        maior = n2;
    } else {
        meio = n2;
        maior = n1;
    }
}*/