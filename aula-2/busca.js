const listaLivros = require('./arrayOrdenado');

function busca(array, de, ate, valorBuscado) {
    const meio = Math.floor((de + ate) / 2);
    const atual =array[meio];

    if (de > ate) {
        return -1; // -1 é a mensagem padrão do JS em funções de sort q não encontra nada
    }

    if (valorBuscado === atual.preco) {
        return meio;
    }

    if (valorBuscado < atual.preco) {
        return busca(array, de, meio - 1, valorBuscado);
    }

    if (valorBuscado > atual.preco) {
        return busca(array, meio + 1, ate, valorBuscado);
    }
};

console.log(busca(listaLivros, 0, listaLivros.length - 1, 60));

// este tipo de busca é chamado de "busca binária", pois está sempre dividindo ao meio para buscar o que deseja.