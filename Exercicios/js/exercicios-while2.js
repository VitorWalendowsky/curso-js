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

// __________________________________________________________________________________________
// 6) Cadastro de e-mails por domínio
// Objetivo: validar formato simples e contar por domínio.

// Enquanto o usuário não digitar "fim":

// Leia um e-mail (trim().toLowerCase()), pare se for "fim".

// Valide: contém "@" e depois do @ existe "." (dica: split("@") → 2 partes; na parte do domínio, verifique includes(".")).

// Some contadores por domínio: gmail.com, outlook.com, yahoo.com, outros.

// Conte inválidos.

// Ao final, mostre total por domínio e quantos inválidos.
// Massa de dados: Ana@Gmail.com, joao@outlook.com, maria@yahoo.com, x@empresa.com.br, errado@@mail
// ___________________________________________________________________________________________________



function cadastroDeEmails() {
    let gmailCount = 0;
    let outlookCount = 0;
    let yahooCount = 0;
    let outrosCount = 0;
    let invalidosCount = 0;

    while (true) {
        let input = prompt("Digite um e-mail (ou 'fim' para encerrar):")?.trim().toLowerCase();

        if (input === "fim") break;

        const partes = input.split("@");

        if (partes.length === 2 && partes[1].includes(".")) {
            const dominio = partes[1];

            if (dominio === "gmail.com") {
                gmailCount++;
            } else if (dominio === "outlook.com") {
                outlookCount++;
            } else if (dominio === "yahoo.com") {
                yahooCount++;
            } else {
                outrosCount++;
            }
        } else {
            invalidosCount++;
        }
    }

    console.log("Resumo:");
    console.log(`Gmail: ${gmailCount}`);
    console.log(`Outlook: ${outlookCount}`);
    console.log(`Yahoo: ${yahooCount}`);
    console.log(`Outros: ${outrosCount}`);
    console.log(`Inválidos: ${invalidosCount}`);
}


// ____________________________________________________________________________________________________
// 7) Maior e menor frase por tamanho
// Objetivo: descobrir a frase mais curta e a mais longa.

// Leia 5 frases com while. Para cada uma: trim() e pegue length.

// Mantenha variáveis: menorLen, menorFrase, maiorLen, maiorFrase.

// Ao final, mostre:

// Menor (len X): "..."

// Maior (len Y): "..."
// Dica: inicialize menorLen com um número bem alto (ex.: 999999999) e maiorLen com 0.
// _________________________________________________________________________________________________

function MaiorEMenorFrase (){
    let menorLen = 9999999999
    let menorFrase = ""
    let maiorLen = 0
    let maiorFrase = ""


}