
let a = 10;
let b= a;
a =30;
 
console.log({a,b});

/*
let juan = {nombre: 'Juan'};
let ana = juan;
ana.nombre='Ana';
console.log({juan, ana});
//En JS todos los objetos son pasados por referencia es por eso que cambia el nombre de juan a Ana
//Recordar que todos los primitivos se pasan por valor y todos los objetos son pasados por referencia
//En JS todo es un objeto menos los primitivos

const cambiaNombre = (persona) =>{
     persona.nombre = 'Tony';
     return persona;
}

let peter = {nombre: 'Peter'};
let tony = cambiaNombre(peter);

console.log({peter,tony});
*/

//Para poder solucionar esto hago lo siguiente
let juan = {nombre: 'Juan'};
let ana = {... juan};//en llaves uso el operador ... spread que si bien es igual que el parametro rest
ana.nombre='Ana';
console.log({juan, ana});

//La diferencia entre rest y  el spread es muy sencilla cuando va como argumento es decir en los parentesis es un rest 
//y quiere decir que el compilador una todos los argumentos en una sola variable y transformalo como un arreglo
// si se usa en cualquier otro lugar pues es un spread y quiere decir que simbolice o separe los elementos 

//La ventaja de hacerlo  de esta manera  es que  también rompe  la referencia  que hay en JavaScript  y de esa manera
//poder  trabajar objetos  y hacer igual acciones   que apunten  a diferentes espacios en memoria.


//Ahora como soluciono acá?
// de la misma forma pongo a persona como si fuera un objeto y uso los ... 
const cambiaNombre = ({...persona}) =>{
     persona.nombre = 'Tony';
     return persona;
}

let peter = {nombre: 'Peter'};
let tony = cambiaNombre(peter);

console.log({peter,tony});


//Arreglos 

const frutas = ['Manzana', 'Pera','Piña'];
//const otrasFrutas = [...frutas];//en el caso de arreglos sería el ... entre los corchetes // <===FUNCIONA DE ESTA FORMA TAMBIEN

console.time('slice');//esto es una bandera //Inicia un TIMER AQUI

const otrasFrutas = frutas.slice(); //SEGUNDO METODO ,TAMBIEN FUNCIONA
//El slice es un metodo de los arreglos que dice Ok corta el arreglo  y regresa los elemmentos que especifico
//pero si no mando ningun argumento  esto regresa un nuevo arreglo rompiendo dicha relacion

console.timeEnd('slice'); //TERMINALO ACA 

console.time('spread');//esto es una bandera //Inicia un TIMER AQUI
const otrasFrutas2 = frutas.slice(); //SEGUNDO METODO ,TAMBIEN FUNCIONA
console.timeEnd('spread'); //TERMINALO ACA 

otrasFrutas.push('Mango');

console.table({frutas, otrasFrutas});

//Ahora ¿cual de los dos metodos es mas eficiente? pues depende mucho de la situación 
//pero hay maneras en las que se puede evaluar 
//se puede observar que arriba se usa el console.time y el console.timeEnd pues ahí yo con un timmer mido el tiempo
//de ejecución y puede ir sacando conclusiones al respecto