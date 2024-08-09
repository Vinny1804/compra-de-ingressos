function comprar() {
    let ingresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);
    let quantidadePista = parseInt(document.getElementById('qtd-pista').innerText);
    let quantidadeSuperior = parseInt(document.getElementById('qtd-superior').innerText);
    let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').innerText);
    let mensagemIngresso = quantidade > 1 ? 'ingressos' : 'ingresso';

    if (isNaN(quantidade) || quantidade <= 0) {
        alert('Por favor, insira uma quantidade válida');
        return;
    }

    if (ingresso == 'pista') {
        if (quantidadePista >= quantidade) {
            quantidadePista -= quantidade;
            document.getElementById('qtd-pista').innerText = quantidadePista;
            alert(`Compra realizada! ${quantidade} ${mensagemIngresso} para a pista`)
        } else {
            alert('Quantidade de ingressos disponíveis para a pista insuficiente');
        }

    } else if (ingresso == 'superior') {
        if (quantidadeSuperior >= quantidade) {
            quantidadeSuperior -= quantidade;
            document.getElementById('qtd-superior').innerText = quantidadeSuperior;
            alert(`Compra realizada! ${quantidade} ${mensagemIngresso} para a Cadeira Superior`);
        } else {
            alert('Quantidade de ingressos disponíveis para a cadeira superior insuficiente');
        }

    } else if (ingresso == 'inferior') {
        if (quantidadeInferior >= quantidade) {
            quantidadeInferior -= quantidade;
            document.getElementById('qtd-inferior').innerText = quantidadeInferior;
            alert(`Compra realizada! ${quantidade} ${mensagemIngresso} para a Cadeira Inferior`);
        } else {
            alert('Quantidade de ingressos disponíveis para a cadeira inferior insuficiente');
        }
    }
}
