// 13. O comitê da seleção brasileira de futebol deseja obter algumas estatísticas dos jogadores, para visualizar melhor o desempenho de seus atletas.

// Para tal deve-se solicitar as seguintes informações abaixo:
// ➔ Nome;
// ➔ Idade;
// ➔ Peso;
// ➔ Sexo;
// ➔ Altura;
// ➔ Quantidade de gols marcados;
// ➔ Quantidade de cartões amarelos recebidos;
// ➔ Quantidade de cartões vermelhos recebidos;

// Lembrando que um time de futebol terá 22 jogadores.

// Ao final deve-se apresentar as seguintes estatísticas:
// ➔ O jogador com o menor peso;ok
// ➔ O jogador com o maior peso;ok

// ➔ O jogador com a maior altura;

// ➔ O jogador com o maior nome;
// ➔ O jogador com o menor nome;

// ➔ A quantidade de jogadores do sexo F
// ➔ A quantidade de jogadores do sexo M

// ➔ O jogador com a menor quantidade de cartões amarelos recebidos;
// ➔ O jogador com a maior quantidade de cartões amarelos recebidos;

// ➔ O jogador com a menor quantidade de cartões vermelhos recebidos.
// ➔ O jogador com a maior quantidade de cartões vermelhos recebidos;

function timeFutebol() {
    debugger
    let numeroJogadores = 0;

    let menorPeso, nomeMenorPeso
    let maiorPeso, nomeMaiorPeso

    let maiorAltura, nomeMaiorAltura

    let maiorNome, menorNome

    let menorCartoesAmarelos, maiorCartoesAmarelos

    let menorCartoesVermelhos, maiorCartoesVermelhos

    let sexoMasculino = 0
    let sexoFeminino = 0

    while (numeroJogadores <= 1) {
        numeroJogadores ++;

        let nome = prompt("Digite o nome do joador").trim()
        let idade = parseInt(prompt("Digite a idade do jogador"));
        let peso = parseFloat(prompt("Digite o peso do jogador em kg: 0,00"));
        let sexo = prompt("Digite o sexo do jogador (F/M)").trim();
        let altura = parseFloat(prompt("Digite a altura do jogador em metros: 0,00"));
        let quantidadeGols = parseInt(prompt("Insira a quantidade de gols marcados"));
        let quantidadeAmarelos = parseInt(prompt("Insira a quantidade de cartões amarelos"));
        let quantidadeVermelhos = parseInt(prompt("Insira a quantidade de cartões vermelhos"));

        if (sexo === 'M') sexoMasculino++;
            else if (sexo === 'F') sexoFeminino++;

        
        
    
      
    }
    console.log(); 
}

