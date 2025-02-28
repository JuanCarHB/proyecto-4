// Array de libros y autores iniciales
const librosLeidos = [
    { titulo: "La Regenta", autor: "Leopoldo Alas 'Clarín'" },
    { titulo: "Cumbres Borrascosas", autor: "Emily Brontë" },
    { titulo: "Cien Años de Soledad", autor: "Gabriel García Márquez" },
    { titulo: "Marianela", autor: "Benito Pérez Galdós" },
    { titulo: "El Extranjero", autor: "Albert Camus" },
    { titulo: "Querido Diego te quiero Quiela", autor: "Elena Poniatowska" },
    { titulo: "Yo, Robot", autor: "Isaac Asimov" },
    { titulo: "La Vegetariana", autor: "Han Kang" }
];

// Función para mostrar los libros leídos en el HTML
function mostrarLibrosLeidos() {
    const listaLibros = document.getElementById('libros-lista');
    listaLibros.innerHTML = "";  // Limpiar la lista antes de renderizarla

    librosLeidos.forEach(libro => {
        const libroElemento = document.createElement('div');
        libroElemento.classList.add('libro');
        libroElemento.innerHTML = `
            <strong>${libro.titulo}</strong>
            <span>Autor: ${libro.autor}</span>
        `;
        listaLibros.appendChild(libroElemento);
    });
}

// Función para agregar un nuevo libro
function agregarLibro() {
    const tituloLibro = document.getElementById('tituloLibro').value.trim();
    
    if (tituloLibro !== "") {
        // Crear un nuevo objeto para el libro
        const nuevoLibro = { titulo: tituloLibro, autor: "Autor desconocido" };
        
        // Agregar el libro al array
        librosLeidos.push(nuevoLibro);

        // Limpiar el campo de entrada
        document.getElementById('tituloLibro').value = "";

        // Actualizar la lista de libros mostrados
        mostrarLibrosLeidos();
    } else {
        alert("Por favor ingresa un título válido para el libro.");
    }
}

// Llamar a mostrarLibrosLeidos() para inicializar la lista de libros
mostrarLibrosLeidos();
