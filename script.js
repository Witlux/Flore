const florContainer = document.getElementById('flor-container');

// Función para crear un pétalo
function crearPetalo(angulo, flor) {
    const petalo = document.createElement('div');
    petalo.classList.add('petalo');
    petalo.style.transform = `rotate(${angulo}deg)`;
    flor.appendChild(petalo);
}

// Función para crear una flor
function crearFlor(flor) {
    const numPetals = 12; // Número de pétalos
    const anguloIncremento = 360 / numPetals;

    for (let i = 0; i < numPetals; i++) {
        crearPetalo(i * anguloIncremento, flor);
    }
}

// Función para crear un ramo de flores
function crearRamo() {
    const numFlores = 5; // Número de flores en el ramo

    for (let i = 0; i < numFlores; i++) {
        const flor = document.createElement('div');
        flor.classList.add('flor');
        flor.style.left = `${Math.random() * 300}px`; // Posición aleatoria en X
        flor.style.top = `${Math.random() * 300}px`; // Posición aleatoria en Y
        florContainer.appendChild(flor);
        crearFlor(flor); // Crear la flor dentro del contenedor
    }
}

// Llamar a la función para crear el ramo
crearRamo();