function exercicio3_1() {
    let n1 = parseFloat(prompt("Digite a primeira nota"));
    let n2 = parseFloat(prompt("Digite a segunda nota"));
    let n3 = parseFloat(prompt("Digite a terceira nota"));
    let media = (((n1 * 2) + (n2 * 3) + (n3 * 5)) / 10);

    if (media >= 6.8 && media < 7) {
        let respostaTrabalho = prompt("O aluno fez trabalho? (Sim/Não)").toLowerCase

        if (respostaTrabalho === "sim") {
            media = Math.min(media + 0.2, 10);
        }
    }

    if (media >= 7) {
        alert("Aprovado");
    } else if (media >= 5 && media < 7) {
        let notaExame = parseFloat(prompt("Digite a nota do exame"));
        let mediaExame = ((media + notaExame) / 2);

        if (mediaExame >= 6) {
            alert("Aprovado em exame");
        }
        else {
            alert("Reprovado");
        }
    } else {
        alert("Reprovado")
    }
}

function exercicio3_2() {
    const formatBRL = v => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    // Entrada
    let valor = Number(prompt("Informe o valor da compra (ex: 349.90):").replace(",", "."));
    if (isNaN(valor) || valor < 0) {
        alert("Valor inválido.");
        return;
    }

    const cupomInput = prompt('Informe o cupom ("FRETEGRATIS", "DESC10" ou deixe vazio):') || "";
    const cupom = cupomInput.trim().toUpperCase();

    // Desconto progressivo
    let descontoPerc = 0;
    if (valor >= 500) descontoPerc = 0.15;
    else if (valor >= 300) descontoPerc = 0.10;
    else if (valor >= 150) descontoPerc = 0.05;

    // Aplica desconto progressivo
    let subtotal = valor * (1 - descontoPerc);

    // Cupom acumulativo
    let cupomDescPerc = 0;
    let frete = 25;

    if (cupom === "DESC10") {
        cupomDescPerc = 0.10;
    } else if (cupom === "FRETEGRATIS") {
        frete = 0;
    } else if (cupom !== "") {
        alert(`Cupom "${cupomInput}" inválido. Ignorado.`);
    }

    subtotal = subtotal * (1 - cupomDescPerc);

    // Se depois dos descontos ficar < 0, ajusta para 0 e avisa
    let aviso = "";
    if (subtotal < 0) {
        subtotal = 0;
        aviso = "Obs: o valor ficou negativo após descontos e foi ajustado para 0.\n";
    }

    const total = subtotal + frete;

    // Saída
    const relatorio = [
        `Valor original: ${formatBRL(valor)}`,
        `Desconto progressivo: ${(descontoPerc * 100).toFixed(0)}%`,
        `Cupom aplicado: ${cupom === "" ? "nenhum" : cupom}${cupom === "DESC10" ? " (10%)" : ""}`,
        `Frete: ${formatBRL(frete)}`,
        `Subtotal pós-descontos: ${formatBRL(subtotal)}`,
        `TOTAL A PAGAR: ${formatBRL(total)}`
    ].join("\n");

    alert((aviso ? aviso : "") + relatorio);
}

function exercicio3_3() {
    let tempo = parseFloat(prompt("Digite o tempo de permanência (em horas):"));
    // IsNaN = Is not a number
    if (isNaN(tempo) || tempo <= 0) {
        alert("Tempo inválido. Digite um número maior que 0.");
        return;
    }

    let horas = Math.ceil(tempo); // Math.ceil() é uma função que serve para arredondar um número para cima, sempre para o inteiro mais próximo maior ou igual ao número original.

    let valor = 0;

    if (horas <= 1) {
        valor = 12;
    } else if (horas < 4) {
        valor = 12 + ((horas - 1) * 6);
    } else if (horas === 4) {
        valor = 30;
    } else {
        valor = 30;

        if (horas > 10) {
            let pernoite = prompt("Houve pernoite? (sim/não)").toLowerCase();

            if (pernoite === "sim") {
                valor += 20;
            }
        }
    }

    alert("Valor a pagar: R$ " + valor.toFixed(2));
}

function exercicio3_4() {
    let lado1 = parseFloat(prompt("Digite o lado 1:"));
    let lado2 = parseFloat(prompt("Digite o lado 2:"));
    let lado3 = parseFloat(prompt("Digite o lado 3:"));
    if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1)
        mostrarResultado("Triângulo válido");
    else
        mostrarResultado("Triângulo inválido"); {
    }
    if (lado1 === lado2 && lado2 === lado3) {
        mostrarResultado("Equilátero")
    }
    if ((lado1 === lado2 && lado1 !== lado3) ||
        (lado2 === lado3 && lado2 !== lado1) ||
        (lado3 === lado1 && lado3 !== lado2)) {
        mostrarResultado("Isósceles")
    }
    else { }
    mostrarResultado("Escaleno")
}
function mostrarResultado(mensagem) {
    alert(mensagem);
}

function exercicio3_5() {
    let x = parseFloat(prompt("digite o valor de X"));
    let y = parseFloat(prompt("digite o valor de Y"));
    if (x === 0 && y === 0) {
        alert("Origem")
    }
    else if (x === 0 && y !== 0) {
        alert("Eixo Y");
    }
    else if (y === 0 && x !== 0) {
        alert("Eixo X");
    }
    else if (x > 0 && y > 0) {
        alert("Q1")
    }
    else if (x < 0 && y > 0) {
        alert("Q2")
    }
    else if (x < 0 && y < 0) {
        alert("Q3")
    }
    else if (x > 0 && y < 0) {
        alert("Q4")
    }
}


function exercicio3_6() {
    let media = parseFloat(prompt("Digite a média do aluno:"));
    let renda = parseFloat(prompt("Digite a renda familiar total (R$):"));
    let moradores = parseInt(prompt("Digite o número de moradores na casa:"));

    if (isNaN(media) || isNaN(renda) || isNaN(moradores) || moradores <= 0) {
        alert("Dados inválidos. Digite corretamente.");
        return;
    }

    let perCapita = renda / moradores;
    let resultado = "";

    if (media >= 8 && perCapita <= 1320) {
        resultado = "Bolsa Integral";
    } else if (media >= 7 && perCapita <= 1980) {
        resultado = "Bolsa Parcial";
    } else {
        resultado = "Sem bolsa";
    }

    alert(
        `Média: ${media}\n` +
        `Renda familiar: R$ ${renda.toFixed(2)}\n` +
        `Moradores: ${moradores}\n` +
        `Renda per capita: R$ ${perCapita.toFixed(2)}\n\n` +
        `Resultado: ${resultado}`
    );
}

function exercicio3_7() {
    let salario = parseFloat(prompt("Digite seu salário:"));
    let tempo = parseInt(prompt("Digite o tempo de emprego em meses:"));
    let parcela = parseFloat(prompt("Digite o valor da parcela:"));
    let negativado = prompt("Está negativado? (sim/não)").toLowerCase();

    let motivos = [];

    if (negativado === "sim") motivos.push("Está negativado");
    if (tempo < 6) motivos.push("Tempo de emprego insuficiente");
    if (parcela > 0.3 * salario) motivos.push("Parcela maior que 30% do salário");

    if (motivos.length === 0) {
        alert("Empréstimo aprovado!");
    } else {
        alert("Reprovado: " + motivos.join(", "));
    }
}

function exercicio3_8() {
    let velocidade = parseFloat(prompt("Digite a velocidade do veículo:"));
    let limite = parseFloat(prompt("Digite o limite da via:"));

    if (velocidade <= limite) {
        alert("Dentro do limite");
    } else if (velocidade <= limite * 1.2) {
        alert("Infração leve");
    } else if (velocidade <= limite * 1.5) {
        alert("Infração grave");
    } else {
        alert("Infração gravíssima");
    }
}

function exercicio3_9() {
    let hora = parseInt(prompt("Digite a hora (0–23):"));

    if (hora < 0 || hora > 23) {
        alert("Hora inválida");
    } else if (hora >= 5 && hora <= 11) {
        alert("Bom dia");
    } else if (hora >= 12 && hora <= 17) {
        alert("Boa tarde");
    } else {
        alert("Boa noite");
    }
}

function exercicio3_10() {
    let plano = parseInt(prompt("Digite o código do plano (1=Basic, 2=Plus, 3=Pro):"));
    let extra = prompt("Deseja internet extra? (sim/não)").toLowerCase();

    let preco = 0;
    if (plano === 1) preco = 39;
    else if (plano === 2) preco = 59;
    else if (plano === 3) preco = 79;

    if (plano === 1 && extra === "sim") {
        alert("Internet extra não disponível no plano Basic!");
    } else if ((plano === 2 || plano === 3) && extra === "sim") {
        preco += 15;
    }

    alert("Valor final: R$ " + preco);
}

function exercicio3_11() {
    let dia = parseInt(prompt("Digite o dia:"));
    let mes = parseInt(prompt("Digite o mês:"));
    let ano = parseInt(prompt("Digite o ano:"));

    let valido = true;

    if (mes < 1 || mes > 12) {
        valido = false;
    } else {
        let diasMes = 31;
        if ([4, 6, 9, 11].includes(mes)) diasMes = 30;
        if (mes === 2) {
            diasMes = (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)) ? 29 : 28;
        }
        if (dia < 1 || dia > diasMes) valido = false;
    }

    alert(valido ? "Data válida" : "Data inválida");
}

function exercicio3_12() {
    let kWh = parseFloat(prompt("Digite o consumo em kWh:"));
    let social = prompt("É tarifa social? (sim/não)").toLowerCase();

    if (kWh <= 0) {
        alert("Consumo inválido");
        return;
    }

    let preco = 0;
    if (kWh <= 100) preco = kWh * 0.6;
    else if (kWh <= 200) preco = kWh * 0.75;
    else preco = kWh * 0.9;

    if (social === "sim" && kWh <= 150) {
        preco *= 0.85;
    }

    alert("Valor a pagar: R$ " + preco.toFixed(2));
}

function exercicio3_13() {
    let idade = parseInt(prompt("Digite sua idade:"));
    let estudante = prompt("É estudante? (sim/não)").toLowerCase();

    if (idade < 12) {
        alert("Paga meia (menor de 12 anos)");
    } else if (idade >= 60) {
        alert("Paga meia (idoso)");
    } else if (estudante === "sim") {
        alert("Paga meia (estudante)");
    } else {
        alert("Paga inteiro");
    }
}

function exercicio3_14() {
    let n1 = parseInt(prompt("Digite o 1º número (1-6):"));
    let n2 = parseInt(prompt("Digite o 2º número (1-6):"));
    let n3 = parseInt(prompt("Digite o 3º número (1-6):"));

    if ([n1, n2, n3].some(n => n < 1 || n > 6)) {
        alert("Número inválido");
        return;
    }

    if (n1 === n2 && n2 === n3) {
        alert("Trinca");
    } else if (n1 === n2 || n2 === n3 || n1 === n3) {
        alert("Par");
    } else if ((n1 + 1 === n2 && n2 + 1 === n3) ||
        (n2 + 1 === n1 && n1 + 1 === n3) ||
        (n3 + 1 === n2 && n2 + 1 === n1)) {
        alert("Sequência");
    } else {
        alert("Sem combinação");
    }
}

function exercicio3_15() {
    let estoque = parseInt(prompt("Digite a quantidade em estoque:"));
    let minimo = parseInt(prompt("Digite o estoque mínimo:"));

    if (estoque <= 0) {
        alert("Esgotado");
    } else if (estoque <= minimo) {
        alert("Crítico");
    } else if (estoque <= minimo * 2) {
        alert("Baixo");
    } else {
        alert("OK");
    }
}

function exercicio3_16() {
    let conta = parseFloat(prompt("Digite o valor da conta:"));
    let servico = parseInt(prompt("Qualidade do serviço (1=ruim, 2=ok, 3=ótimo):"));
    let pessoas = parseInt(prompt("Digite o número de pessoas:"));
    let taxa = prompt("Deseja taxa de serviço? (sim/não)").toLowerCase();

    if (pessoas < 1) {
        alert("Número de pessoas inválido");
        return;
    }

    let gorjeta = servico === 1 ? 0.05 : servico === 2 ? 0.1 : 0.15;
    let total = conta * (1 + gorjeta);

    if (taxa === "sim") total *= 1.1;

    let porPessoa = total / pessoas;

    alert("Total: R$ " + total.toFixed(2) + "\nPor pessoa: R$ " + porPessoa.toFixed(2));
}

function exercicio3_17() {
    let peso = parseFloat(prompt("Digite o peso em kg:"));
    let distancia = parseFloat(prompt("Digite a distância em km:"));

    if (peso > 30) {
        alert("Carga não aceita");
        return;
    }

    let preco = 0;
    if (peso <= 2) preco = 12;
    else if (peso <= 10) preco = 25;
    else preco = 40;

    if (distancia <= 100) preco += 0;
    else if (distancia <= 500) preco += 15;
    else preco += 30;

    alert("Valor do frete: R$ " + preco);
}

function exercicio3_18() {
    let dia = parseInt(prompt("Digite o dia da semana (1=Dom, …, 7=Sáb):"));
    let hora = parseInt(prompt("Digite a hora (0–23):"));
    let feriado = prompt("É feriado? (sim/não)").toLowerCase();

    let aberto = false;

    if (feriado === "sim" && dia >= 2 && dia <= 6) {
        aberto = false;
    } else if (dia >= 2 && dia <= 6 && hora >= 9 && hora <= 18) {
        aberto = true;
    } else if (dia === 7 && hora >= 9 && hora <= 13) {
        aberto = true;
    }

    alert(aberto ? "Aberto" : "Fechado");
}

function exercicio3_19() {
    let notas = [];
    for (let i = 1; i <= 4; i++) {
        let nota = parseFloat(prompt("Digite a nota " + i + " (0–10):"));
        if (nota < 0 || nota > 10) {
            alert("Nota inválida");
            return;
        }
        notas.push(nota);
    }

    let media = notas.reduce((a, b) => a + b, 0) / 4;

    if (media >= 7) {
        alert("Aprovado, média: " + media.toFixed(2));
    } else if (media >= 5) {
        alert("Recuperação, média: " + media.toFixed(2));
    } else {
        alert("Reprovado, média: " + media.toFixed(2));
    }
}

function exercicio3_20() {
    let perfil = parseInt(prompt("Digite o perfil (1=usuário, 2=gestor, 3=admin):"));
    let chave = parseInt(prompt("Digite a chave de segurança (número):"));

    if (perfil === 1) {
        alert("Acesso básico concedido");
    } else if (perfil === 2) {
        if (chave % 2 === 0) alert("Acesso gestor concedido");
        else alert("Acesso negado (chave precisa ser par)");
    } else if (perfil === 3) {
        if (chave % 5 === 0 && chave > 100) alert("Acesso admin concedido");
        else alert("Acesso negado (chave inválida para admin)");
    } else {
        alert("Perfil inválido");
    }
}

function exercicio3_21() {
    let etanol = parseFloat(prompt("Digite o preço do etanol:"));
    let gasolina = parseFloat(prompt("Digite o preço da gasolina:"));

    let razao = etanol / gasolina;

    if (razao <= 0.7) {
        alert("Compensa usar etanol (razão = " + razao.toFixed(2) + ")");
    } else {
        alert("Compensa usar gasolina (razão = " + razao.toFixed(2) + ")");
    }
}

function exercicio3_22() {
    let senha = prompt("Digite a senha:");
    let confirmacao = prompt("Confirme a senha:");

    if (!senha || !confirmacao) {
        alert("Senha inválida");
    } else if (senha !== confirmacao) {
        alert("Senhas não coincidem");
    } else if (senha.length < 6) {
        alert("Senha fraca (mínimo 6 caracteres)");
    } else {
        alert("Senha cadastrada com sucesso");
    }
}

function exercicio3_23() {
    let temp = parseFloat(prompt("Digite a temperatura em °C:"));

    if (temp < 0) alert("Congelante");
    else if (temp <= 14) alert("Frio");
    else if (temp <= 25) alert("Agradável");
    else if (temp <= 35) alert("Quente");
    else alert("Muito quente");
}

function exercicio3_24() {
    let entrada = parseInt(prompt("Digite a hora de entrada (0–23):"));
    let tempo = parseInt(prompt("Digite o tempo de prova em minutos:"));

    if (entrada < 8 || entrada > 10) {
        alert("Entrada não permitida");
    } else if (entrada === 10 && tempo > 120) {
        alert("Entrada não permitida (tempo excedido)");
    } else {
        alert("Entrada permitida");
    }
}

function exercicio3_25() {
    let idade = parseInt(prompt("Digite a idade do condutor:"));
    let cnh = parseInt(prompt("Digite os anos de CNH:"));
    let sinistro = prompt("Houve sinistro nos últimos 12 meses? (sim/não)").toLowerCase();

    if (idade >= 21 && cnh >= 2 && sinistro === "não") {
        let franquia = 1500;
        if (idade < 25 || cnh < 3) {
            franquia *= 1.2;
        }
        alert("Elegível. Franquia: R$ " + franquia.toFixed(2));
    } else {
        alert("Não elegível para o seguro");
    }
}
