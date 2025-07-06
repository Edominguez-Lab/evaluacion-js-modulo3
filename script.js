// Obtener referencias a los elementos del DOM
const nombreInput = document.getElementById('nombreInput');
const saludarBtn = document.getElementById('saludarBtn');
const saludoOutput = document.getElementById('saludoOutput');
const caracteresInfo = document.getElementById('caracteresInfo');

// Función para generar el saludo y mostrar la información de caracteres
function generarSaludo() {
    // 1. Tomar el valor del input
    const nombre = nombreInput.value.trim(); // .trim() para eliminar espacios en blanco al inicio/final

    // Uso de estructuras condicionales (if, else)
    if (nombre === '') {
        // Si el campo está vacío
        saludoOutput.textContent = '¡Por favor, ingresa tu nombre!';
        saludoOutput.style.color = 'red'; // Cambiar color a rojo para advertencia
        caracteresInfo.textContent = 'El nombre está vacío.';
    } else {
        // Si hay un nombre
        // 2. Mostrar un saludo
        saludoOutput.textContent = `Hola, ${nombre}`;
        saludoOutput.style.color = '#28a745'; // Volver al color verde si se había puesto rojo

        // 3. Mostrar cuántos caracteres tiene el nombre
        const numCaracteres = nombre.length;
        caracteresInfo.textContent = `Tu nombre tiene ${numCaracteres} caracteres.`;
    }
}

// Captura de eventos del DOM (onclick o addEventListener)
// Usamos addEventListener, que es la forma moderna y recomendada
saludarBtn.addEventListener('click', generarSaludo);

// Opcional: También podrías querer que se genere el saludo al presionar "Enter" en el input
nombreInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        generarSaludo();
    }
});