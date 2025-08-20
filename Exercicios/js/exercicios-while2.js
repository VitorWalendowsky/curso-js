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