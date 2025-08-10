function mostrarResultado(texto) {
    document.getElementById("resultado").innerHTML = texto;
}

function ex1() {
    let frase = prompt("Digite uma frase:");
    let palavraAntiga = prompt("Qual palavra deseja trocar?");
    let palavraNova = prompt("Qual palavra nova?");
    let novaFrase = frase.replace(palavraAntiga, palavraNova);
    mostrarResultado(`Frase modificada: ${novaFrase}`);
}

function ex2() {
    let frase = prompt("Digite uma frase:");
    let palavra = prompt("Qual palavra deseja remover?");
    let novaFrase = frase.replaceAll(palavra, "");
    mostrarResultado(`Frase sem a palavra: ${novaFrase}`);
}

function ex3() {
    let nomeCompleto = prompt("Digite seu nome completo:");
    let partes = nomeCompleto.split(" ");
    let primeiro = partes[0];
    let ultimo = partes[partes.length - 1];
    mostrarResultado(`Primeiro nome: ${primeiro}<br>Último nome: ${ultimo}`);
}

function ex4() {
    let frase = prompt("Digite uma frase:");
    let parte = frase.substring(5, 15);
    mostrarResultado(`Parte extraída: ${parte}`);
}

function ex5() {
    let texto = prompt("Digite um texto com espaços no início e no fim:");
    let semEspacos = texto.trim();
    mostrarResultado(`Texto sem espaços extras: "${semEspacos}"`);
}

function ex6() {
    let texto = prompt("Digite um texto com espaços no início:");
    let semInicio = texto.trimStart();
    mostrarResultado(`Texto sem espaços no início: "${semInicio}"`);
}

function ex7() {
    let texto = prompt("Digite um texto com espaços no final:");
    let semFinal = texto.trimEnd();
    mostrarResultado(`Texto sem espaços no final: "${semFinal}"`);
}

function ex8() {
    let telefone = prompt("Digite seu número de telefone sem DDD:");
    let completo = telefone.padStart(11, "48");
    mostrarResultado(`Telefone com DDD: ${completo}`);
}

function ex9() {
    let conta = prompt("Digite o número da conta bancária:");
    let contaCompleta = conta.padEnd(10, "0");
    mostrarResultado(`Conta formatada: ${contaCompleta}`);
}

function ex10() {
    let valor = parseFloat(prompt("Digite um valor decimal:"));
    let formatado = valor.toFixed(2).replace(".", ",");
    mostrarResultado(`Preço formatado: R$ ${formatado}`);
}
