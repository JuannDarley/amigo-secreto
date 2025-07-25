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
           limparLista();
        }      
        
    } else {
        return alert('Por favor, forneça um nome válido.');
    }
   
}

function limparLista() {
    document.querySelector('input').value = '';
    document.querySelector('input').focus();
}
