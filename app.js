// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    let input = document.querySelector('#amigo');
    let nombre = input.value.trim();

    // Validar que no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar al array
    amigos.push(nombre);

    // Limpiar el campo
    input.value = "";

    // Mostrar lista actualizada
    mostrarAmigos();
}

// Función para mostrar los amigos en la lista
function mostrarAmigos() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = ""; // Limpiar antes de agregar

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Función para sortear un amigo
function sortearAmigo() {
    // Validar que haya amigos
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    // Generar índice aleatorio
    let indice = Math.floor(Math.random() * amigos.length);

    // Obtener nombre sorteado
    let amigoSorteado = amigos[indice];

    // Mostrar resultado en la lista de resultados
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}
