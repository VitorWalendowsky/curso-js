function mostrarResultado(texto) {
    document.getElementById("resultado").innerHTML = texto;
}

function atividade1() {
    let nome = prompt("Digite seu nome:");
    let idade = parseInt(prompt("Digite sua idade:"));
    let altura = parseFloat(prompt("Digite sua altura em metros:"));
    mostrarResultado(`Olá, meu nome é ${nome}, tenho ${idade} anos e minha altura é ${altura} metros.`);
}

function atividade2() {
    let idade = parseInt(prompt("Digite sua idade atual:"));
    let futura = idade + 5;
    mostrarResultado(`Daqui a 5 anos você terá ${futura} anos.`);
}

function atividade3() {
    let reais = parseFloat(prompt("Digite o valor em reais:"));
    let taxa = 5;
    let dolares = reais / taxa;
    mostrarResultado(`O valor em dólares é $${dolares.toFixed(2)}`);
}

function atividade4() {
    let luzAcesa = false;
    let acao = parseInt(prompt("Digite 1 para acender a luz ou 0 para apagar:"));
    luzAcesa = acao === 1;
    mostrarResultado(luzAcesa ? "A luz está acesa" : "A luz está apagada");
}

function atividade5() {
    let largura = parseFloat(prompt("Digite a largura do retângulo:"));
    let altura = parseFloat(prompt("Digite a altura do retângulo:"));
    let area = largura * altura;
    mostrarResultado(`A área do retângulo é ${area} metros quadrados.`);
}

function atividade6() {
    let nota1 = parseFloat(prompt("Digite a primeira nota:"));
    let nota2 = parseFloat(prompt("Digite a segunda nota:"));
    let nota3 = parseFloat(prompt("Digite a terceira nota:"));
    let media = (nota1 + nota2 + nota3) / 3;
    mostrarResultado(`A média das notas é ${media.toFixed(2)}`);
}

function atividade7() {
    let preco = parseFloat(prompt("Digite o preço original do produto:"));
    let desconto = parseFloat(prompt("Digite a porcentagem de desconto:"));
    let valorFinal = preco - (preco * desconto / 100);
    mostrarResultado(`O valor final com desconto é R$ ${valorFinal.toFixed(2)}`);
}

function atividade8() {
    let celsius = parseFloat(prompt("Digite a temperatura em Celsius:"));
    let fahrenheit = (celsius * 9 / 5) + 32;
    mostrarResultado(`A temperatura em Fahrenheit é ${fahrenheit.toFixed(2)}`);
}

function atividade9() {
    let num1 = parseInt(prompt("Digite o primeiro número:"));
    let num2 = parseInt(prompt("Digite o segundo número:"));
    let soma = num1 + num2;
    let produto = num1 * num2;
    mostrarResultado(`A soma é ${soma}<br>O produto é ${produto}`);
}

function atividade10() {
    let valor1 = prompt("Digite o primeiro valor:");
    let valor2 = prompt("Digite o segundo valor:");
    let antes = `Antes da troca: valor1 = ${valor1}, valor2 = ${valor2}`;
    let temp = valor1;
    valor1 = valor2;
    valor2 = temp;
    let depois = `Depois da troca: valor1 = ${valor1}, valor2 = ${valor2}`;
    mostrarResultado(`${antes}<br>${depois}`);
}
