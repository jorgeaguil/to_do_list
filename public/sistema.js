// Seleccionar los elementos HTML que se necesitan
const nuevaTarea = document.getElementById("tarea");
const listaTareas = document.getElementById("lista");
const listaHechas = document.getElementById("listaHechas");
const btnMarcarHecha = document.querySelector("[value='Marcar como hecha']");
const btnEliminarHechas = document.querySelector("[value='Eliminar tareas hechas']");

// Función para agregar una tarea a la lista
function agregar() {
  // Obtener el texto de la nueva tarea y limpiar el espacio en blanco
  const tarea = nuevaTarea.value.trim();
  // Verificar que la tarea no esté duplicada
  const tareasExistentes = listaTareas.querySelectorAll("li");
  for (let i = 0; i < tareasExistentes.length; i++) {
    if (tareasExistentes[i].textContent === tarea) {
      alert("La tarea ya existe.");
      return;
    }
  }
//verificar que agregue una tarea
    if (tarea === "") {
        alert("Ingrese una tarea.");
        return;
    }
  // Crear un nuevo elemento de lista con la tarea y un checkbox
  const nuevaTareaLi = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  nuevaTareaLi.appendChild(checkbox);
  const texto = document.createTextNode(tarea);
  nuevaTareaLi.appendChild(texto);
  
  // Agregar la nueva tarea a la lista
  listaTareas.appendChild(nuevaTareaLi);

  // Limpiar la caja de texto para agregar nuevas tareas
  nuevaTarea.value = ""; 
}
// Función para marcar una tarea como hecha
function marcarHecha() {
  // Seleccionar todas las tareas pendientes
  const tareasPendientes = listaTareas.querySelectorAll("li:not(.completada)");
  // Recorrer todas las tareas pendientes
  for (let i = 0; i < tareasPendientes.length; i++) {
    // Verificar si la tarea está marcada como completada
    const checkbox = tareasPendientes[i].querySelector("input[type='checkbox']");
    if (checkbox.checked) {
      // Marcar la tarea como completada y moverla a la lista de tareas completadas
      tareasPendientes[i].classList.add("completada");
      listaHechas.appendChild(tareasPendientes[i]);
    }
  }
}
// Funcion para eliminar las tareas hechas
function eliminarHechas() {
  // Seleccionar todas las tareas completadas
  const tareasCompletadas = listaHechas.querySelectorAll("li");

  // Recorrer todas las tareas completadas y eliminarlas
  for (let i = 0; i < tareasCompletadas.length; i++) {
    tareasCompletadas[i].remove();
  }
}
// Escuchar el evento submit en el formulario de agregar tarea
const formulario = document.querySelector("form");
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  agregar();
});
// Escuchar el evento click en el botón de marcar tareas hechas
btnMarcarHecha.addEventListener("click", function (evento) {
  evento.preventDefault();
  marcarHecha();
});
// Escuchar el evento click en el botón de eliminar tareas hechas
btnEliminarHechas.addEventListener("click", function (evento) {
  evento.preventDefault();
  eliminarHechas();
});