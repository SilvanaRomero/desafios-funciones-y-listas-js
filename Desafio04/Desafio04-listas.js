// Desafíos
// 01 - Crea una lista vacía llamada "listaGenerica".

let listaGenerica = [];

// 02 - Crea una lista de lenguajes de programación llamada "lenguajesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin' , 'Python'];

// 03 - Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

lenguajesDeProgramacion.push('Java');
lenguajesDeProgramacion.push('Ruby');
lenguajesDeProgramacion.push('GoLang');

// 04 - Crea una función que muestre en la consola todos los elementos de la lista lenguagesDeProgramacion.

function mostrarLista (listaDeprogramacion) {

    for ( let i=0; i < listaDeprogramacion.length; i++) {

        console.log(listaDeprogramacion[i]);
    }
}

// 05 - Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.

function mostrarListaInversa (listaDeprogramacion) {

    for (let i = listaDeprogramacion.length - 1; i >= 0; i--) {
        console.log(listaDeprogramacion[i]);

    }
}


// 06 - Crea una función que calcule el promedio de los elementos en una lista de números.

function calcularPromedio(listaNumerica){

    let suma = 0;

    for ( let i = 0; i < listaNumerica.length; i++){

        suma += listaNumerica[i];
        
    }

    let promedio = suma / listaNumerica.length;
    return promedio;
}

// 07 - Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

function muestraNumeroMayorYMenor (listaNumerica){

    let numeroMenor = listaNumerica[0];
    let numeroMayor = listaNumerica[0];

    for ( let i = 0; i < listaNumerica.length; i++){

        if (listaNumerica[i] > numeroMayor){

            numeroMayor = listaNumerica[i];
        } else {
            if (listaNumerica[i] < numeroMenor){

                numeroMenor = listaNumerica[i];
            }
        }
    }

    return { numeroMenor, numeroMayor};
}


// 08 - Crea una función que devuelva la suma de todos los elementos en una lista.

function calcularSuma (listaNumerica) {

    let suma = 0;

    for ( let i = 0; i < listaNumerica.length; i++){

        suma += listaNumerica[i];
    }

    return suma;
}

// 09 - Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.

function devuelvePosicion(listaGenerica, elemento) {

    let posicion = -1;

    for (let i = 0; i < listaGenerica.length; i++){

        if (listaGenerica[i] === elemento) {
            
            posicion = i;
            break;

        }
    }

    return posicion;

}

//Ejemplo de uso:

let listaAnimales = ['Gato', 'Perro', 'Huron'];
devuelvePosicion(listaAnimales, "Huron");
devuelvePosicion(listaAnimales, "Lobo");

// 10 - Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.

function sumarLista(lista1, lista2){

    let listaDeResultados = [];

    for (let i=0; i < lista1.length; i++){

        let suma = lista1[i] + lista2[i];
        listaDeResultados.push(suma);

    }
    return listaDeResultados;
}

// 11 - Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

function cuadradoLista(listaNumerica){

    let listaDeResultados = [];

    for (let i=0; i < listaNumerica.length; i++){

        let doble = listaNumerica[i] * listaNumerica[i];
        listaDeResultados.push(doble);

    }
    return listaDeResultados;
}
