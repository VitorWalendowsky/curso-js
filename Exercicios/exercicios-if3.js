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