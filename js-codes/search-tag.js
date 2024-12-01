
function ini_searchTag() {
    const input = document.getElementById('textInput');
    const button = document.getElementById('addButton');
    const container = document.getElementById('container');
    
    // Función para añadir un div
    button.addEventListener('click', () => {
        const text = input.value.trim(); // Captura el texto y elimina espacios extra
        if (text !== '') {
          const newDiv = document.createElement('div');
          newDiv.className = 'dynamic-div'; // Clase para el estilo
          newDiv.type = 'btn'
          newDiv.textContent = text; // Establece el texto
  
          // Añade evento para eliminar al hacer doble clic
          newDiv.addEventListener('dblclick', () => {
            container.removeChild(newDiv); // Elimina el div del contenedor
          });
  
          container.appendChild(newDiv); // Añade el div al contenedor
          input.value = ''; // Limpia el input
        }
    });
    
    // Permitir añadir al presionar "Enter"
    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        button.click();
      }
    });


}
