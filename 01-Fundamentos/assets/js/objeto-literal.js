const personaje = { //Los objetos literales son objetos que tienen pares de valores(propiedad)
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: { //esto es otro objeto anidado
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War' //con esto logro poner caracteres especiales
};

console.log(personaje);
console.log('Nombre:', personaje.nombre);//Esta y 
console.log('Nombre:', personaje['nombre']);//esta son formas de acceder a las propiedades de mi objeto
console.log('Edad', personaje.edad);
console.log('Coords',personaje.coords);
console.log('Lat',personaje.coords.lat);

//Se solicita el numero de trajes que tiene Ironman
console.log('Numero de Trajes: ',personaje.trajes.length);
//Esta Correcto
console.log('Ultimo Traje: ',personaje.trajes[personaje.trajes.length-1]);

const x = 'vivo';
console.log('Vivo', personaje[x]);

console.log('Última Película', personaje['ultima-pelicula'])

// Más detalles 

delete personaje.edad; // Con esto borro un atributo o propiedad 
console.log( personaje );

personaje.casado = true;

const entriesPares = Object.entries( personaje );
console.log( entriesPares );

// personaje = true;
 
//Para yo poder poner mis atributos que no se puedan cambiar hago lo siguiente
Object.freeze (personaje);

personaje.dinero = 100000000;
personaje.casado = false;
//Cuando son objetos dentro de otros objetos si se cambian los atributos
personaje.direccion.ubicacion = 'Costa Rica'; 
//si yo quisiera que no se cambien  deberia usar el Object.freeze(direccion)
console.log(personaje);

//Si yo quiero listar todas las propiedades del objeto

const propiedades = Object.getOwnPropertyNames( personaje );
const valores = Object.values( personaje );
console.log(propiedades, valores);

//Se adjunta un link  para saber propiedades y metodos de los objetos
// o informacion general sobre javascript https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object
