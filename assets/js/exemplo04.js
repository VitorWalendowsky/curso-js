// Criar uma lista de 7 carros com os atributos (marca, placa, modelo, data de emplacamento, cor).
// let colaboradores = [
//     {
//         "nome": "João Silva",
//         "data_nascimento": "1985-03-15",
//         "cargo": "Gerente de Marketing"
//     },
//     {
//         "nome": "Pedro Santos",
//         "data_nascimento": "1982-11-10",
//         "cargo": "Coordenador de Vendas"
//     }
// ]

// Criar uma lista de 7 carros com os atributos (marca, placa, modelo, data de emplacamento, cor).
let carros = [
    {
        "marca": "Fiat",
        "placa": "ABC-1234",
        "modelo": "Argo",
        "dataDeEmplacamento": "2020-05-15" ,
        "cor": "Vermelho"
    },
    {
        "marca": "Volkswagen",
        "placa": "XYZ-5678",
        "modelo": "Gol",
        "dataDeEmplacamento": "2019-08-10",
        "cor":"Prata"
    },
    {
        "marca": "Chevrolet",
        "placa": "DEF-4321",
        "modelo": "Onix",
        "dataDeEmplacamento": "2021-01-22",
        "cor":"Preto"
    },
    {
        "marca": "Honda",
        "placa": "GHI-8765",
        "modelo": "Civic",
        "dataDeEmplacamento": "2018-03-12" ,
        "cor":"Branco"
    },
    {
        "marca": "Ford",
        "placa": "JKL-3456",
        "modelo": "Ka",
        "dataDeEmplacamento": "2017-06-09",
        "cor": "Azul"
    },
    {
        "marca": "Renault",
        "placa": "QHP-0151",
        "modelo": "Clio",
        "dataDeEmplacamento": "2022-11-05",
        "cor": "Branco"
    },
    {
        "marca": "Bmw",
        "placa": "PQR-6543",
        "modelo": "320i",
        "dataDeEmplacamento": "2023-04-04-18",
        "cor":"Preto"
    },
]

// a) Criar uma lista de string com as marcas a partir da lista de carros (utilizar map)
// b) Criar uma lista de objetos com placa, modelo da lista de carros (utilizar map)
// c) Criar uma lista de string com os modelos filtrando por marca Fiat (lista de string)

// a)
let marcas = carros.map(carro => carro.marca);

//b)
const placasModelos = carros.map(carro => {
    return {
        placa: carro.placa,
        modelo: carro.modelo
    };
});

// c)
const marca = carros.filter(carro => carro.marca === "Fiat")
  .map(carro => ({modelo: carro.modelo}));

// d) Criar uma lista de (marca, modelo) filtrando por Azul
// e) Criar uma lista filtrando por ano de emplacamento 2025

// d)
const resultado = carros
    .filter(carro => carro.cor === "Azul")
    .map(carro => ({
        marca: carro.marca,
        modelo: carro.modelo
    }));

// e)
const carros2025 = carros.filter(carro => carro.anoEmplacamento === 2025);

// Exercicio02
// Criar uma lista de 2 alunos com os seguintes atributos (id, nome, sobrenome, número matricula, turma, notas (lista com 3 notas))

// Turmas Disponíveis: Sup 05, Sup 06 e Sup 07

// a) Adicionar um aluno com id, nome, sobrenome, notas (lista vazia)
// b) Adicionar um aluno com id, nome, sobrenome, número da matrícula, turma, notas
// c) Adicionar um aluno com id, nome, sobrenome, número da matricula, notas
// d) Adicionar um aluno preenchendo id, nome, sobrenome, notas
// e) Criar uma lista com os ids dos alunos
// f) Criar uma lista com os ids dos alunos filtrando pela turma Sup 07
// g) Criar uma lista filtrando por alunos com nome menor que 10
// h) Criar uma lista filtrando com os números das matrículas
// i) Criar uma lista filtrando alunos sem número de matricula

const alunos = [
    {
        id: crypto.randomUUID(),
        nome: "Claudio",
        sobrenome: "Magalhães",
        numeroMatricula: "CM201863",
        turma: "Sup 05",
        notas: [10,7,8.5],
    },
    {
        id: crypto.randomUUID(),
        nome: "Maria",
        sobrenome: "Joana",
        numeroMatricula: "MJ221145",
        turma: "Sup 06",
        nota1: [7.5,9,8]
    },
];

// a)
alunos.push({
    id: crypto.randomUUID(),
    nome:"João",
    sobrenome: "Silva",
    notas[],
});
// b)
alunos.push({
    id: crypto.randomUUID(),
    nome:"Ana",
    sobrenome: "Pereira",
    numeroMatricula: "AP213354",
    turma: "Sup 07",
    notas: [8,9,10]
});
// c)
alunos.push({
    nome: "Carlos",
    sobrenome: "Oliveira",
    numeroMatricula: "CO824562",
    notas: [6,7.5,8],
});

// d)
alunos.push({
    id: crypto.randomUUID(),
    nome: "Beatriz",
    sobrenome: "Naira",
    notas [8.6,9.4,10],
});

//e)
const listaIds = alunos.map(aluno => aluno.id);

//f)
const idsSup07 = alunos
    .filter(aluno => aluno.turma === "Sup 07")
    .map(aluno => aluno.id);

//g)
const nomeMenorQue10 = alunos.filter(aluno => aluno.nome.length < 10);

//h)
const numeroMatricula = alunos.filter(aluno => aluno.numeroMatricula).map(aluno=>aluno.numeroMatricula);

//i)
const alunoSemMatricula = alunos.filter(aluno => !aluno.numeroMatricula);