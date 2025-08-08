
let amigos = [];


function agregarAmigo() {
    let input = document.querySelector('#amigo');
    let nombre = input.value.trim();

    
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    
    amigos.push(nombre);


    input.value = "";

    
    mostrarAmigos();
}


function mostrarAmigos() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = ""; 

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}


function sortearAmigo() {
    
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    
    let indice = Math.floor(Math.random() * amigos.length);

    
    let amigoSorteado = amigos[indice];

    
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = `<li>🎉🥳​ El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}
