function somar(){
    // pegar um elemento daa tela por ID
    //<elemento id="numero1">
    let campoNumero1 = document.getElementById("numero1");
    let campoNumero2 = document.getElementById("numero2");

    let numero1 = parseInt(campoNumero1.value);
    let numero2 = parseInt(campoNumero2.value);

    console.log(campoNumero1.value);
    console.log(campoNumero2.value);

    let soma = numero1 + numero2;
    alert("A soma é: " + soma);
}

function subtrair(){
    let campoNumero1 = document.getElementById("numero1");
    let campoNumero2 = document.getElementById("numero2");

    let numero1 = parseInt(campoNumero1.value);
    let numero2 = parseInt(campoNumero2.value);

    console.log(campoNumero1.value);
    console.log(campoNumero2.value);

    let subtração = numero1 - numero2;
    alert("A subtração é: " + subtração);
}
function multiplicar(){
    let campoNumero1 = document.getElementById("numero1");
    let campoNumero2 = document.getElementById("numero2");

    let numero1 = parseInt(campoNumero1.value);
    let numero2 = parseInt(campoNumero2.value);

    console.log(campoNumero1.value);
    console.log(campoNumero2.value);

    let multiplicar = numero1 * numero2;
    alert("A multiplicação é: " + multiplicar);
}
function dividir(){
    let campoNumero1 = document.getElementById("numero1");
    let campoNumero2 = document.getElementById("numero2");

    let numero1 = parseInt(campoNumero1.value);
    let numero2 = parseInt(campoNumero2.value);

    console.log(campoNumero1.value);
    console.log(campoNumero2.value);

    let divisao = numero1 / numero2;
    alert("A divisão é: " + divisao);
}

// function definirCorAzul(){
//     let itens = document.getElementsByClassName("item");
//     for(let i=0; i<itens.length; i++){
//         itens[i].style.backgroundColor = "#34b4dc";
//     }
//     console.log(itens);
// }
// function definirCorPreto(){
//     let itens = document.getElementsByClassName("item");
//     for(let i=0; i<itens.length; i++){
//         itens[i].style.backgroundColor = "#000";
//     }
//     console.log(itens);
// }
// function definirCorRoxo(){
//     let itens = document.getElementsByClassName("item");
//     for(let i=0; i<itens.length; i++){
//         itens[i].style.backgroundColor = "#a734dcff";
//     }
//     console.log(itens);
// }
// function definirCorVerde(){
//     let itens = document.getElementsByClassName("item");
//     for(let i=0; i<itens.length; i++){
//         itens[i].style.backgroundColor = "#0fe90fff";
//     }
//     console.log(itens);
// }
// function definirCorVermelho(){
//     let itens = document.getElementsByClassName("item");
//     for(let i=0; i<itens.length; i++){
//         itens[i].style.backgroundColor = "#e00707ff";
//     }
//     console.log(itens);
// }

function definirCor(nomeCor) {
    let itens = document.getElementsByClassName("item");

    let cor = "";
    if (nomeCor === "Azul") {
        cor = "#34b4dc";
    } else if (nomeCor === "Preto") {
        cor = "#000";
    } else if (nomeCor === "Roxo") {
        cor = "#a734dcff";
    } else if (nomeCor === "Verde") {
        cor = "#0fe90fff";
    }   else if (nomeCor === "Vermelho") {
        cor = "#e00707ff";
    }
    for (let i = 0; i < itens.length; i++) {
        let item = itens[i];
        item.style.backgroundColor = cor;
    }
}

function alterarVisibilidade(){
    let iframe = document.getElementsByTagName("iframe");
    // sei que nossa tela tem um iframe, n vou fazer um for
    // porém se tiver mais de um é necessário utilizar for
    if (iframe[0].style.display === "inline"){
        iframe[0].style.display = "none";
    } else {
        iframe[0].style.display = "inline";
    }
}

function limparCampos(){
    let campoNome = document.getElementById("nome")[0];
    campoNome.value = "";

    let campoSobrenome = document.getElementById("sobrenome")[0];
    campoSobrenome.value = "";
}

function apresentarNomeCompleto(){
    let campoNome = document.getElementById("nome")[0];
    let campoSobrenome = document.getElementById("sobrenome")[0];

    let nome = campoNome.value;
    let sobrenome = campoSobrenome.value;

    let nomeCompleto = `${nome} ${sobrenome}`;
    alert(`O nome completo é: ${nomeCompleto}`);
}
