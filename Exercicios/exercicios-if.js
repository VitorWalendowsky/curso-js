function mostrarResultado(texto) {
    document.getElementById("resultado").innerHTML = texto;
}

function ex1() {
    let idade = parseInt(prompt("Digite sua idade:"));
    mostrarResultado(idade >= 18 ? "Você é maior de idade" : "Você é menor de idade");
}

function ex2() {
    let num = parseInt(prompt("Digite um número inteiro:"));
    mostrarResultado(num % 2 === 0 ? "O número é par" : "O número é ímpar");
}

function ex3() {
    let nota = parseFloat(prompt("Digite a nota da prova:"));
    mostrarResultado(nota >= 7 ? "Aprovado" : "Reprovado");
}

function ex4() {
    let senha = prompt("Digite a senha:");
    mostrarResultado(senha === "1234" ? "Acesso permitido" : "Senha incorreta");
}

function ex5() {
    let valor = parseFloat(prompt("Digite o valor da compra:"));
    mostrarResultado(valor > 100 ? "Você ganhou um desconto de 10%" : "Sem desconto disponível");
}

function ex6() {
    let idade = parseInt(prompt("Digite sua idade:"));
    if (idade <= 12) mostrarResultado("Criança");
    else if (idade <= 17) mostrarResultado("Adolescente");
    else if (idade <= 59) mostrarResultado("Adulto");
    else mostrarResultado("Idoso");
}

function ex7() {
    let n1 = parseFloat(prompt("Digite o primeiro número:"));
    let n2 = parseFloat(prompt("Digite o segundo número:"));
    if (n1 > n2) mostrarResultado(`Maior: ${n1}`);
    else if (n2 > n1) mostrarResultado(`Maior: ${n2}`);
    else mostrarResultado("Os números são iguais");
}

function ex8() {
    let num = parseFloat(prompt("Digite um número:"));
    if (num > 0) mostrarResultado("Positivo");
    else if (num < 0) mostrarResultado("Negativo");
    else mostrarResultado("Zero");
}

function ex9() {
    let media = parseFloat(prompt("Digite a média final do aluno:"));
    if (media >= 7) mostrarResultado("Aprovado");
    else if (media >= 5) mostrarResultado("Recuperação");
    else mostrarResultado("Reprovado");
}

function ex10() {
    let num = parseInt(prompt("Digite um número inteiro:"));
    if (num % 3 === 0 && num % 5 === 0) mostrarResultado("Múltiplo de 3 e 5");
    else if (num % 3 === 0) mostrarResultado("Múltiplo de 3");
    else if (num % 5 === 0) mostrarResultado("Múltiplo de 5");
    else mostrarResultado("Não é múltiplo de 3 nem de 5");
}

function ex11() {
    let idade = parseInt(prompt("Digite sua idade:"));
    let ingresso = prompt("Você possui ingresso? (sim/não)").toLowerCase();
    if (idade >= 18 && ingresso === "sim") mostrarResultado("Entrada permitida");
    else mostrarResultado("Entrada negada");
}

function ex12() {
    let valor = parseFloat(prompt("Digite o valor da compra:"));
    let vip = prompt("Você é cliente VIP? (sim/não)").toLowerCase();
    if (valor > 200 || vip === "sim") mostrarResultado("Você ganhou um brinde!");
    else mostrarResultado("Sem bônus disponível");
}

function ex13() {
    let usuario = prompt("Digite o nome de usuário:");
    let senha = prompt("Digite a senha:");
    if (usuario === "admin" && senha === "1234") mostrarResultado("Login bem-sucedido");
    else mostrarResultado("Usuário ou senha inválidos");
}

function ex14() {
    let lado1 = parseFloat(prompt("Digite o lado 1:"));
    let lado2 = parseFloat(prompt("Digite o lado 2:"));
    let lado3 = parseFloat(prompt("Digite o lado 3:"));
    if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1)
        mostrarResultado("Triângulo válido");
    else
        mostrarResultado("Triângulo inválido");
}

function ex15() {
    let ano = parseInt(prompt("Digite o ano:"));
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0)
        mostrarResultado("Ano bissexto");
    else
        mostrarResultado("Ano comum");
}
