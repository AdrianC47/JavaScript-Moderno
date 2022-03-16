let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo:', juegos.length );

let primero = juegos[2-2];
let ultimo = juegos[juegos.length-1];

console.log('Primero: ', primero);
console.log('Ultimo: ', ultimo);

//Si quiero recorrer todo mi arreglo puedo usar un foreach

juegos.forEach( (elemento, indice, arreglo) => {
    console.log(elemento,indice,arreglo);
} ); 

let nuevaLongitud = juegos.push('F-Zero'); //añado un nuevo elemento al final del arrego
console.log({ nuevaLongitud, juegos });

nuevaLongitud = juegos.unshift('Fire Emblem'); //Añado un nuevo elemento al inicio del arreglo
console.log({ nuevaLongitud, juegos}); 

//Ahora digamos que quiero borrar un elemento que se encuentra al final

let juegoBorrado= juegos.pop('F-Zero');
console.log({juegoBorrado, juegos});
/*
Si unicamente quiero  eliminar el último elemento de un array y devolverlo se usa el pop() mismo
así
variable = arreglo.pop()*/ 

//Ahora si quiero borrar un elemento en una posicion específica

let pos = 1;
console.log(juegos); 
let juegosBorrados= juegos.splice(pos, 2);
console.log({juegosBorrados, juegos});

let metroidIndex = juegos.indexOf('Metroid'); //Es CaseSensitive, con el indexof busco el indice de un elemento de un arreglo
console.log({metroidIndex})

// TODO: Referencia






