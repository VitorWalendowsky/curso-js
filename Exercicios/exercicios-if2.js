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
}
    alert("A ordem crescente é:\n" + menor + "," + meio + "," + maior);
}

// Função para converter número em texto (0 a 9999)
function numeroPorExtenso(num) {
    const unidades = ["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove"];
    const especiais = ["dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"];
    const dezenas = ["", "", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"];
    const centenas = ["", "cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"];

    if (num === 100) return "cem";
    if (num < 10) return unidades[num];
    if (num >= 10 && num < 20) return especiais[num - 10];
    if (num < 100) {
        let dez = Math.floor(num / 10);
        let uni = num % 10;
        return dezenas[dez] + (uni > 0 ? " e " + unidades[uni] : "");
    }
    if (num < 1000) {
        let cen = Math.floor(num / 100);
        let resto = num % 100;
        return centenas[cen] + (resto > 0 ? " e " + numeroPorExtenso(resto) : "");
    }
    if (num < 10000) {
        let milhar = Math.floor(num / 1000);
        let resto = num % 1000;
        let milharExt = (milhar === 1 ? "mil" : unidades[milhar] + " mil");
        return milharExt + (resto > 0 ? " " + numeroPorExtenso(resto) : "");
    }
    return num;
}

function exercicio17() {
    let ano = parseInt(prompt("Digite o ano de nascimento (ex: 1993):"));
    if (isNaN(ano) || ano < 0) {
        alert("Ano inválido!");
        return;
    }
    alert(numeroPorExtenso(ano));
}

function exercicio18() {
    let horaStr = prompt("Digite a hora de nascimento no formato HH:MM:SS");
    let partes = horaStr.split(":");

    if (partes.length !== 3) {
        alert("Formato inválido! Use HH:MM:SS");
        return;
    }

    let h = parseInt(partes[0]);
    let m = parseInt(partes[1]);
    let s = parseInt(partes[2]);

    if ([h, m, s].some(v => isNaN(v) || v < 0)) {
        alert("Valores inválidos!");
        return;
    }

    let resultado = `${numeroPorExtenso(h)} horas, ${numeroPorExtenso(m)} minutos e ${numeroPorExtenso(s)} segundos`;
    alert(resultado);
}

