let amigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeDeAmigo = inputAmigo.value.trim();

    if (nomeDeAmigo === '') {
        alert(' Digite um nome que seja válido.');
        return;
    }

    if (amigos.includes(nomeDeAmigo)) {
        alert('Este nome já está Adicionado.');
        return;
    }

    amigos.push(nomeDeAmigo);
    inputAmigo.value = '';

    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    const listaDeAmigos = document.getElementById('listaAmigos');
    listaDeAmigos.innerHTML = '';

    amigos.forEach(amigo => {
        const itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        listaDeAmigos.appendChild(itemLista);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione no mínimo um nome para ser sorteado.');
        return;
    }

    //Para Sortear um único nome aleatório
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    // Para Exibe o resultado
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `Seu Amigo Secreto é: ${amigoSorteado}`;
}
