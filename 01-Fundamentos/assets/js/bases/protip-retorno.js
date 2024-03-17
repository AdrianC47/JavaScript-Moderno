// function crearPersona(nombre, apellido){
//     return {nombre,apellido} // se pone solo nombre y apellido ya que JS entiende que quiero retornar variables con el mismo nombre
// }

//en el caso de que quiera hacerlo con funciones de flecha recordar
//que se quitan los return y llaves y debo poner parentesis en las variables que retorna las cuales llevan
//el mismo nombre que el constructor
const crearPersona = (nombre, apellido) => ({nombre, apellido });//({})


const persona = crearPersona('Luis Adrian', 'Cabrera Bermeo');
console.log(persona);

function imprimeArgumentos(){
    console.log(arguments);
}

// Para poder obtener e  imprimir todos  los argumentos que se manden en funciones de flecha 
// se hace uso del ... (se llama rest) seguido del nombre para los argumentos puede ser args, arguments, etc
// Lo que hara es crear un arreglo con todos los argumentos que sean mandados en la funcion
const imprimeArgumentos2 = (edad, ...args) =>{ 
    //console.log({edad ,args});
    return args;
};

const imprimeGruposDeMusica = (genero, ...args) =>{
    // return genero;
    console.log({genero,args});
}
//ojo que luego de usar el ... (rest) no puede venir ningun otro argumento
//es decir esto estaria mal ...args, otracosa

//si tengo un arreglo y quiero que a cada valor de ese arreglo se asigne una variable hago lo siguiente
const [casado, vivo, nombre, saludo] = imprimeArgumentos2(23,true,false,'Adrian','Hello');
//recordar que el 10 se extrae arriba por eso no viene la edad cuando se imprimen los argumentos
console.log({casado, vivo, nombre, saludo});

console.log(imprimeGruposDeMusica("Glam Metal","Skid Row","White Lion","Cinderella"))

const { apellido:nuevoNombreDeVariableApellido } = crearPersona('Henry','Ordoñez'); 
console.log({nuevoNombreDeVariableApellido});

//Estructuracion de Argumentos

const Tony = { 
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

// const imprimePropiedades = (personaje) =>{
//     //alt+shif + flecha abajo me permite repetir linea
//     console.log('nombre',personaje.nombre);
//     console.log('codeName',personaje.codeName);
//     console.log('vivo',personaje.vivo);
//     console.log('edad',personaje.edad);
//     console.log('trajes',personaje.trajes);
// }


//Desestructuración de Argumentos
const imprimePropiedades = ({nombre,codeName,vivo,edad=15,trajes}) =>{
    //si edad existe se asigna sino se asigna el 15
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}
imprimePropiedades(Tony);
