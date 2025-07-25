let listaDeNomes = [];

function adicionarAmigo() {

  let nome = document.querySelector('input').value;
    
    if (nome && typeof nome === 'string') {
        if (listaDeNomes.includes(nome)) {
            return alert('Este nome já está na lista.');
        } else {
            listaDeNomes.push(nome);
            let exibirLista = document.getElementById('listaAmigos');
           let nomesNaLista = listaDeNomes.map (nome => `<li>${nome}</li>`).join('');
           exibirLista.innerHTML = nomesNaLista;
           limparCampo();
          
        }      
        
    } else {
        return alert('Por favor, forneça um nome válido.');
    }
   
}

function limparCampo() {
    document.querySelector('input').value = '';
    document.querySelector('input').focus();
}

function limparLista() {
    listaDeNomes = [];
    let exibirLista = document.getElementById('listaAmigos');
    exibirLista.innerHTML = '';
}

function sortearAmigo() {
    if (listaDeNomes.length === 0) {
        return alert('A lista de amigos está vazia. Adicione amigos antes de sortear.');
    }
    
    let indiceAleatorio = Math.floor(Math.random() * listaDeNomes.length);
    let amigoSorteado = listaDeNomes[indiceAleatorio];
    listaDeNomes[indiceAleatorio] = listaDeNomes[listaDeNomes.length - 1];
    listaDeNomes.pop();
    let exibirLista = document.getElementById('listaAmigos');
           let nomesNaLista = listaDeNomes.map (nome => `<li>${nome}</li>`).join('');
           exibirLista.innerHTML = nomesNaLista;
    
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo sorteado é: <strong>${amigoSorteado}</strong>`;
    if(listaDeNomes.length === 0) {
        limparLista();
    }
    
}

