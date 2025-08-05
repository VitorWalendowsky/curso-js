//string
function converStringParaInt(){
    const anoFabricacaoEntradaUsuario = "2024"; //string
    const anoFabricacao = parseInt(anoFabricacaoEntradaUsuario);
    alert("Ano Fabricação: " + anoFabricacao)
}

function exemploConverterStringParaFloat(){
    const precoDoCarro = "299800,10";
    const preco = parseFloat(precoDoCarro);
    alert("Preço: " + preco);
}

exemploConverterStringParaFloat();