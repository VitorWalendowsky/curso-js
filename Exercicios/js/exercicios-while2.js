// 8) Classificador de horários “hh:mm”
// Objetivo: validar e classificar horários lidos.

// Leia 6 horários no formato hh:mm.

// Valide formato: length === 5, charAt(2) === ':', e 0 ≤ hh ≤ 23, 0 ≤ mm ≤ 59 (use parseInt em substring(0,2) e substring(3,5)).

// Classifique:

// Madrugada: 00:00–04:59

// Manhã: 05:00–11:59

// Tarde: 12:00–17:59

// Noite: 18:00–23:59

// Conte cada faixa e quantos inválidos. Mostre um resumo no final.
// Massa de dados: 07:30, 23:59, 12:00, 04:00, 19:10, 25:00

// 9) Validador de código “BLU-AAAA-NNNN”
// Objetivo: verificar padrão com split e substring.

// Leia 5 códigos (ex.: BLU-2025-0042).

// Regras:

// split("-") deve ter 3 partes: prefixo, ano, número.

// Prefixo deve ser “BLU” (maiúsculo).

// Ano: tamanho 4 e parseInt(ano) ≥ 2000.

// Número: 4 dígitos, aceite números menores mas padronize com padStart(4,"0") ao mostrar.

// Conte válidos e inválidos; liste no console os válidos normalizados.
// Massa de dados: BLU-2024-7, BLU-2025-042, SP-2025-0010, BLU-1999-0001, BLU-2025-1234

// 10) Username + ID com padding
// Objetivo: gerar username e id formatado.

// Repita 3x: peça nome completo (trim()), toLowerCase(), split(" ").

// username = primeira letra do primeiro nome + último sobrenome (ex.: Ana Maria Souza → asouza).

// id sequencial (1, 2, 3) exibido como 6 dígitos com padStart(6,"0") (ex.: 000001).

// Mostre no console uma “tabela” com duas colunas: Username (use padEnd(15," ")) e ID.
// Massa de dados: Ana Maria Souza, João Pedro Lima, MARIA das DORES

function cadastroDeEmailPorDominio() {
    const dominios = {
        "gmail.com": 0,
        "outlook.com": 0,
        "yahoo.com": 0,
        "outros": 0
    };
    let invalidos = 0;

    while (true) {
        let email = prompt("Digite um e-mail (ou 'fim' para encerrar):").trim().toLowerCase();
        if (email === "fim") break;

        if (email.includes("@")) {
            const partes = email.split("@");
            if (partes.length === 2 && partes[1].includes(".")) {
                const dominio = partes[1];
                if (dominios.hasOwnProperty(dominio)) {
                    dominios[dominio]++;
                } else {
                    dominios["outros"]++;
                }
            } else {
                invalidos++;
            }
        } else {
            invalidos++;
        }
    }

    let resultado = "Total de e-mails por domínio:\n";
    for (const [dominio, count] of Object.entries(dominios)) {
        resultado += `${dominio}: ${count}\n`;
    }
    resultado += `E-mails inválidos: ${invalidos}`;
    alert(resultado);
}

function maiorEMenorFrase() {
    let menorLen = 999999999;
    let menorFrase = "";
    let maiorLen = 0;
    let maiorFrase = "";

    let contador = 0;
    while (contador < 5) {
        let frase = prompt("Digite uma frase:").trim();
        const len = frase.length;

        if (len < menorLen) {
            menorLen = len;
            menorFrase = frase;
        }
        if (len > maiorLen) {
            maiorLen = len;
            maiorFrase = frase;
        }

        contador++;
    }

    alert(`Menor (len ${menorLen}): "${menorFrase}"\nMaior (len ${maiorLen}): "${maiorFrase}"`);
}

function classificadorDeHorarios() {
    const horarios = [];
    let madrugadas = 0, manhas = 0, tardes = 0, noites = 0, invalidos = 0;

    let contador = 0;
    while (contador < 6) {
        let horario = prompt("Digite um horário no formato hh:mm:").trim();
        if (horario.length === 5 && horario.charAt(2) === ':') {
            const hh = parseInt(horario.substring(0, 2));
            const mm = parseInt(horario.substring(3, 5));

            if (hh >= 0 && hh < 24 && mm >= 0 && mm < 60) {
                if (hh < 5) {
                    madrugadas++;
                } else if (hh < 12) {
                    manhas++;
                } else if (hh < 18) {
                    tardes++;
                } else {
                    noites++;
                }
            } else {
                invalidos++;
            }
        } else {
            invalidos++;
        }
        contador++;
    }

    alert(`Madrugada: ${madrugadas}\nManhã: ${manhas}\nTarde: ${tardes}\nNoite: ${noites}\nInválidos: ${invalidos}`);
}

function validadorDeCodigo() {
    let validos = 0;
    let invalidos = 0;
    const validosCodigos = [];

    let contador = 0;
    while (contador < 5) {
        let codigo = prompt("Digite um código no formato BLU-AAAA-NNNN:").trim();
        const partes = codigo.split("-");

        if (partes.length === 3 && partes[0] === "BLU" && partes[1].length === 4 && parseInt(partes[1]) >= 2000 && partes[2].length <= 4) {
            const numeroFormatado = partes[2].padStart(4, "0");
            validosCodigos.push(`BLU-${partes[1]}-${numeroFormatado}`);
            validos++;
        } else {
            invalidos++;
        }
        contador++;
    }

    alert(`Códigos válidos:\n${validosCodigos.join("\n")}\nTotal válidos: ${validos}\nTotal inválidos: ${invalidos}`);
}

function usernameEID() {
    let resultado = "Username          ID\n";
    let contador = 1;

    while (contador <= 3) {
        let nomeCompleto = prompt("Digite o nome completo:").trim().toLowerCase();
        const partes = nomeCompleto.split(" ");
        const primeiroNome = partes[0];
        const ultimoSobrenome = partes[partes.length - 1];

        const username = primeiroNome.charAt(0) + ultimoSobrenome;
        const id = contador.toString().padStart(6, "0");

        resultado += `${username.padEnd(15, " ")} ${id}\n`;
        contador++;
    }

    alert(resultado);
}




// 2) Processar linhas “CSV” simples (id;nome;cpf;data)
// Objetivo: ler 5 linhas e validar campos por regras básicas de string.

// Repita 5x com while: peça uma linha no formato id;nome;cpf;aaaa-mm-dd.

// Use split(";") e verifique se tem 4 partes.

// Regras:

// id: só dígitos (teste com replace(/\d/g,"") ⇒ deve virar "") e > 0.

// nome: trim() e length ≥ 7.

// cpf: tamanho 14 e substring nas posições dos pontos e traço (xxx.xxx.xxx-xx).

// data: tamanho 10 e charAt(4) === '-' e charAt(7) === '-'.

// Conte válidas e inválidas; liste no console quais índices foram inválidos.

// Dica: Evite regex complexa; use length, substring, charAt, replace.

// 3) Frases: contagem e classificação por pontuação
// Objetivo: ler 6 frases e classificar por final ?, ! ou outro.

// Repita 6x: leia uma frase, faça trimEnd() e pegue o último caractere com substring(len-1).

// Contadores: perguntas (terminam com ?), exclamações (!) e neutras (qualquer outro).

// Ao final, mostre os três totais e o percentual de cada (use toFixed(1)).

// Massa de dados:
// “Oi?” · “Tudo bem!” · “Amanhã eu vou” · “Sério!” · “Como assim?” · “Tá certo”

// 4) Datas: mais antiga, mais recente e contagem por mês
// Objetivo: ler 5 datas dd/mm/aaaa, comparar e resumir.

// Para cada data, use split("/") em dia, mes, ano.

// Monte um número para comparação: chave = ano + mes + dia como string ("20250409") e compare lexicograficamente (ou converta pra parseInt).

// Atualize maisAntiga e maisRecente (guarde a data original).

// Conte quantas datas de março (mes === "03") e quantas de dezembro ("12").

// Ao final, exiba: mais antiga, mais recente, contagem de março e dezembro.

// Dica: Garanta zero à esquerda no mês/dia usando padStart(2,"0") se o aluno digitar “3/9/2025”.

// 5) Normalizador de telefones (somente dígitos → formato padrão)
// Objetivo: ler 4 telefones em formatos variados e normalizar.

// Para cada telefone:

// Remova espaços, (, ), - usando replaceAll.

// Se tiver 10 dígitos (fixo), formate como "(DD) XXXX-XXXX".

// Se tiver 11 dígitos (celular), formate como "(DD) 9XXXX-XXXX".

// Caso contrário, marque como inválido.

// Use substring e padStart se precisar ajustar.

// Ao final, liste os 4 números formatados e a quantidade inválida.

// Massa de dados:
// (47) 99999-1234 · 47 3232-1122 · 4732321122 · 47-9-8888-7777

// 6) Cadastro de e-mails por domínio
// Objetivo: validar formato simples e contar por domínio.

// Enquanto o usuário não digitar "fim":

// Leia um e-mail (trim().toLowerCase()), pare se for "fim".

// Valide: contém "@" e depois do @ existe "." (dica: split("@") → 2 partes; na parte do domínio, verifique includes(".")).

// Some contadores por domínio: gmail.com, outlook.com, yahoo.com, outros.

// Conte inválidos.

// Ao final, mostre total por domínio e quantos inválidos.
// Massa de dados: Ana@Gmail.com, joao@outlook.com, maria@yahoo.com, x@empresa.com.br, errado@@mail

// 7) Maior e menor frase por tamanho
// Objetivo: descobrir a frase mais curta e a mais longa.

// Leia 5 frases com while. Para cada uma: trim() e pegue length.

// Mantenha variáveis: menorLen, menorFrase, maiorLen, maiorFrase.

// Ao final, mostre:

// Menor (len X): "..."

// Maior (len Y): "..."
// Dica: inicialize menorLen com um número bem alto (ex.: 999999999) e maiorLen com 0.


// _______________________________________________________________________________________
// 1) Sistema de compras com preço BR + relatório
// Objetivo: cadastrar produtos até o usuário parar, limpar preço no formato BR e gerar um pequeno relatório.

// Enquanto desejaCadastrar === "sim":

// Leia nome do produto (use trim() e valide length ≥ 2).

// Leia preço em BR (R$ 1.299,90 etc.).

// Limpe com replace/replaceAll: remova R$, espaços e pontos; troque , por .; parseFloat.

// Acumule total, quantidade, maior preço e nome do mais caro.

// Pergunte se deseja cadastrar outro (sim/não), normalizando com toLowerCase().trim().

// Ao final, mostre no console uma “tabela” com 2 colunas: Produto (use padEnd(20," ")) e Preço (toFixed(2)).

// Mostre total e média com toFixed(2).

// Massa de dados:
// Batata Palha | R$ 12,50 · Arroz 5kg | 29,90 · Leite | R$ 4,79
// ____________________________________________________________________________________________
function sistemaCompras() {
    let desejaCadastrar = prompt("Deseja cadastrar produto? (sim/não)").toLowerCase().trim();
  
    while (desejaCadastrar === "sim") {
      let nomeProduto = prompt("Insira o nome do produto").trim();
  
      if (nomeProduto.length >= 2) {
        console.log("Produto válido:", nomeProduto);
      } else {
        console.log("Produto deve ter pelo menos 2 caracteres.");
        continue; // volta para o início do loop
      }
  
      let precoStr = prompt("Insira o preço do produto (ex: R$ 1.299,90)").trim();
  
      let precoLimpo = precoStr
        .replace("R$", "")
        .replace(/\./g, "")
        .replace(",", ".")
        .trim();
  
      let preco = parseFloat(precoLimpo);
  
      if (!isNaN(preco)) {
        console.log(`Preço cadastrado: R$ ${preco.toFixed(2).replace(".", ",")}`);
      } else {
        console.log("Preço inválido.");
      }
  
      // Perguntar novamente
      desejaCadastrar = prompt("Deseja cadastrar outro produto? (sim/não)").toLowerCase().trim();
    }
  
    console.log("Cadastro finalizado.");
  }
  