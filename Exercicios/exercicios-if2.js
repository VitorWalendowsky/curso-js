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
    if (lado1 === lado3 && lado2 === lado4 && lado1 !== lado2 )
        alert("É um retangulo");
    else
        alert("Não é um retangulo");
}

function exercicio07(){
    let num=parseInt(prompt("Digite o número para analisar"));
    let mensagem = "";
    if (num === 0) {
        mensagem += "o número é neutro\n";
    }  else {
            if (num > 0) {
                mensagem += "o número é positivo\n";
            } else {
                mensagem += "o número é negativo\n";
        } if (num > 10) {
            mensagem += "o número é maior que 10\n"
        } else if (num <= 50) {
            mensagem += "o número é menor ou igual a 50\n"
        } if(num < -10) {
            mensagem += "o número é menor que -10\n"
        } else if(num >= 30){
            mensagem += "o número é maior ou igual a 30\n"
        } if ( num != 1) {
            mensagem += "o número é diferente de 1"
        }
    }
    alert (mensagem)
}

function exercicio14(){
    let n1 = parseFloat(prompt("Insira o primeiro número"));
    let n2 = parseFloat(prompt("Insira o primeiro número"));
    let n3 = parseFloat(prompt("Insira o primeiro número"));
    let maior, menor, meio;
    
}
