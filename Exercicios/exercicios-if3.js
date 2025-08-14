function exericio3_1(){
    let n1 = parseFloat(prompt("Digite a primeira nota"));
    let n2 = parseFloat(prompt("Digite a segunda nota"));
    let n3 = parseFloat(prompt("Digite a terceira nota"));
    let media = (((n1 * 2) + (n2 * 3) + (n3 * 5)) / 10);
    if (media >= 7) {
        alert("Aprovado");
    } if (media >= 5 && media < 7) {
        let notaExame = parseFloat(prompt("Digite a nota do exame"));
        let mediaExame = ((media + notaExame) / 2);

        if (mediaExame >= 6) {
             alert("Aprovado em exame");
    }
        else {
          alert("Reprovado");
        }
        

    }
}