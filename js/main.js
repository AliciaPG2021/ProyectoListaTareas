const tareasNuevas = new Array();

let inputText = document.querySelector('.tarea');
let boton = document.querySelector('.boton');
let selectPrioridad = document.querySelector('.seleccionTarea');

boton.addEventListener('click', recogerTareas);

function recogerTareas(event) {

    event.preventDefault();

    let textoTarea = inputText.value.trim();
    let seleccionTarea = selectPrioridad.value;


    if (textoTarea !== "" && seleccionTarea !== 0) {

        const nuevaTarea = {
            texto: textoTarea,
            prioridad: seleccionTarea,
        }
        tareasNuevas.push(nuevaTarea);

    } else {
        alert('Todos los campos son obligatorios');
    }


    console.log(tareasNuevas);
}



