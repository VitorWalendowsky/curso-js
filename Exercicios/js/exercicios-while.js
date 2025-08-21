// Título: Exercícios JS - Lógica 04 - While (Estruturas de Repetição Enquanto)
// 1) Total da compra
// Objetivo: somar preços e exibir total e média.

// Solicite 4 preços (use parseFloat e troque , por . se necessário).

// Use while para repetir 4 vezes.

// Ao final, mostre total e média com toFixed(2).
// Massa de dados: 3,50 | 10 | 7,99 | 8,5

// 2) Contagem por inicial
// Objetivo: contar quantas palavras começam com “a”.

// Solicite 5 palavras.

// Converta para minúsculas com toLowerCase().trim().

// Conte quantas começam com “a” usando startsWith("a").

// Mostre: “Começam com ‘a’: X / Outras: Y”.
// Massa de dados: Ana, casa, Amora, abacaxi, rua

// 3) Validar idade
// Objetivo: garantir faixa válida antes de prosseguir.

// Peça uma idade com parseInt.

// Enquanto a idade < 1 ou > 120, mostre mensagem de erro e peça novamente.

// Quando válido, mostre: “Idade cadastrada: X”.

// 4) Maior altura entre 3
// Objetivo: descobrir o maior valor lido.

// Solicite 3 alturas (em metros), convertendo , para . e usando parseFloat.

// Use uma variável maiorAltura iniciando em 0.

// Se a altura lida for maior, atualize maiorAltura.

// No final, alert com a maior altura (duas casas decimais).
// Massa de dados: 1,72 | 1,80 | 1,75

// 5) Menu mini
// Objetivo: treinar while com opções simples.

// Mostre um menu:

// 1 - Saudação
// 2 - Par ou ímpar
// 100 - Sair
// Enquanto a opção ≠ 100:

// 1: peça o nome e mostre “Olá, [nome.trim()]!”.

// 2: peça um inteiro e mostre “Par” ou “Ímpar” (use % 2).

// Outra opção: “Opção inválida”.

// Ao escolher 100, encerrar com “Sistema encerrado”. *

function totalCompra() {
    let total = 0;
    let contador = 0;

    while (contador < 4) {
        let preco = parseFloat(prompt("Digite o preço do item " + (contador + 1)));
        total += preco;
        contador++;
    }

    let media = total / 4;
    alert("Total: R$ " + total.toFixed(2) + "\nMédia: R$ " + media.toFixed(2));
}

function contagemPorInicial() {
    let contador = 0;
    let comA = 0;
    let outras = 0;

    while (contador < 5) {
        let palavra = prompt("Digite a palavra " + (contador + 1)).toLowerCase().trim();
        if (palavra.startsWith("a")) {
            comA++;
        } else {
            outras++;
        }
        contador++;
    }

    alert("Começam com 'a': " + comA + " / Outras: " + outras);
}

function validarIdade() {
    let idade = parseInt(prompt("Digite sua idade"));

    while (idade < 1 || idade > 120) {
        alert("Idade inválida. Por favor, digite uma idade entre 1 e 120.");
        idade = parseInt(prompt("Digite sua idade"));
    }

    alert("Idade cadastrada: " + idade);
}

function maiorAltura() {
    let maiorAltura = 0;
    let contador = 0;

    while (contador < 3) {
        let altura = parseFloat(prompt("Digite a altura em metros do " + (contador + 1) + "º indivíduo").replace(',', '.'));
        if (altura > maiorAltura) {
            maiorAltura = altura;
        }
        contador++;
    }

    alert("A maior altura é: " + maiorAltura.toFixed(2) + " metros");
}

function menuMini() {
    let opcao = 0;

    while (opcao !== 100) {
        opcao = parseInt(prompt("Menu:\n1 - Saudação\n2 - Par ou Ímpar\n100 - Sair"));

        if (opcao === 1) {
            let nome = prompt("Digite seu nome").trim();
            alert("Olá, " + nome + "!");
        } else if (opcao === 2) {
            let numero = parseInt(prompt("Digite um número inteiro"));
            if (numero % 2 === 0) {
                alert("Par");
            } else {
                alert("Ímpar");
            }
        } else if (opcao !== 100) {
            alert("Opção inválida.");
        }
    }

    alert("Sistema encerrado.");
}
<<<<<<< HEAD
=======

>>>>>>> 067f5beda9843ab7c13ffe11caec178b2115941d
