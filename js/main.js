const tareasNuevas = new Array();

let inputText = document.querySelector('.tarea');
let boton = document.querySelector('.boton');
let selectPrioridad = document.querySelector('.seleccionTarea');
let sectionPintar = document.querySelector('.pintarTarea');


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

        pintarVariasTareas(tareasNuevas);



    } else {
        alert('Todos los campos son obligatorios');
    }


    console.log(tareasNuevas);
}


function pintarUnaTarea(pTarea) {

    let div = document.createElement('div');
    div.innerHTML = `<p>Tarea: ${pTarea.texto}. Prioridad: ${pTarea.prioridad}</p>`;
    sectionPintar.appendChild(div);
}

function pintarVariasTareas(pTareas) {
    sectionPintar.innerHTML = "";
    pTareas.forEach(tarea => pintarUnaTarea(tarea));

}

//filtrar por prioridad

function filtrarPrioridad(pListaTareas, pPrioridad) {

    const prioridadTareas = pListaTareas.filter(tarea => {
        return tarea.prioridad === pPrioridad
    });

    return prioridadTareas;

}

//evento de prioridad

let selectFiltroPrioridad = document.querySelector('#elegirTarea');

selectFiltroPrioridad.addEventListener('change', recogerPrioridad);

function recogerPrioridad(event) {

    let prioridad = event.target.value;
    let filtroFinal = filtrarPrioridad(tareasNuevas, prioridad);
    pintarVariasTareas(filtroFinal);
}

