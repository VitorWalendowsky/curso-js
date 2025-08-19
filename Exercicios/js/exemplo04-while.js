function exemploWhile() {
    // While é uma forma de repetir determinado trecho de código
    let indice = 0;
    while (indice < 5) {
        alert("Hello World");
        // Incrementar a variável em 1
        indice = indice + 1;
    }

}

function solicitarDadosAluno() {
    let indice = 0;

    while (indice <= 2) {
        let nome = prompt("Digite o nome do aluno");
        let idade = parseInt(prompt("Digite a idade"));

        // Incrementando a variável indice em 1
        indice = indice + 1;
    }
}

function solicitarDadosAlunoComNota() {
    const quantidadeDesejada = parseInt(prompt("Digite a quantidade de alunos"));
    const quantidadeNotas = parseInt(prompt("Digite a quantidade de notas"));

    let indice = 0;
    while (indice < quantidadeDesejada) {
        const nome = prompt("Digite o nome do aluno");

        const nota1 = parseFloat(prompt("Digite a nota 1"));
        const nota2 = parseFloat(prompt("Digite a nota 2"));
        const nota3 = parseFloat(prompt("Digite a nota 3"));

        const media = (nota1 + nota2 + nota3) / 3;
        alert("Média: " + media.toFixed(2))

        // incrementar
        indice = indice + 1;
    }
}
function delay() {
    return new Promise(resolve => setTimeout(resolve, 1000));
  }
async function exemploRelogio() {
    /*
        00:00:00
        00:00:01
        00:00:59
        00:01:00
        00:59:59
        01:00:00
        23:59:59
    */
    let hora = 0;
    let minuto = 0;
    let segundo = 0;
    while (hora < 24) {
        while (minuto < 60) {
            while (segundo < 60) {
                console.log(
                    hora.toString().padStart(2, "0") +
                    ":" + minuto.toString().padStart(2, "0") +
                    ":" + segundo.toString().padStart(2, "0"));
                segundo = segundo + 1;
                await delay();
            }
            minuto = minuto + 1;
            segundo = 0;
        }
        hora = hora + 1;
        minuto = 0;
    }


}