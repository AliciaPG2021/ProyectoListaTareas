const tareasNuevas = new Array();

let inputText = document.querySelector('.tarea');
let boton = document.querySelector('.boton');
let selectPrioridad = document.querySelector('.seleccionTarea');
let sectionPintar = document.querySelector('.pintarTarea');
let idActual = 0;


boton.addEventListener('click', recogerTareas);

function recogerTareas(event) {

    event.preventDefault();
    idActual++;

    let textoTarea = inputText.value.trim();
    let seleccionTarea = selectPrioridad.value;


    if (textoTarea !== "" && seleccionTarea !== 0) {

        const nuevaTarea = {
            id: idActual,
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

    let article = document.createElement('article');
    let botonBorrar = document.createElement('button');

    let contentBotonBorrar = document.createTextNode('Borrar');
    botonBorrar.appendChild(contentBotonBorrar);



    article.innerHTML = `<h2> ${pTarea.texto} </h2> 
                            <p>${pTarea.prioridad}</p>`;


    botonBorrar.addEventListener('click', () => {//eliminar tarea del interfaz
        article.remove();

        let index = tareasNuevas.findIndex(tarea => {//eliminar tarea del array
            return tarea.id === pTarea.id;
        })
        console.log(index);
        tareasNuevas.splice(index, 1);
    });



    article.appendChild(botonBorrar);
    sectionPintar.appendChild(article);
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
    if (prioridad !== "") {
        let filtroFinal = filtrarPrioridad(tareasNuevas, prioridad);
        pintarVariasTareas(filtroFinal);
    } else {
        pintarVariasTareas(tareasNuevas);
    }

}


//filtro por palabra


function filtrarPalabra(pPalabra, pListaTareas) {

    let palabrasTareas = pListaTareas.filter(tarea => {

        return tarea.texto.toLowerCase().includes(pPalabra.toLowerCase());
    });

    return palabrasTareas;

}

//evento de pralabra

let searchTexto = document.querySelector('#search');

searchTexto.addEventListener('input', recogerSearch);

function recogerSearch(event) {

    if (event.target.value !== "") {
        let listaFiltrada = filtrarPalabra(event.target.value, tareasNuevas);
        pintarVariasTareas(listaFiltrada);

    } else {
        pintarVariasTareas(tareasNuevas);
    }
}









