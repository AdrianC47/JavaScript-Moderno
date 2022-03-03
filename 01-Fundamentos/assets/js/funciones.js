function saludar(nombre) {
//    console.log(arguments);//Con esto imprimo los argumentos de la funcion asi no sean usados
//  console.log("Hola " +nombre);
    return [1,2] ;//cuando se encuentra un return se sale de la funcion

    console.log("Soy un código que está después del return"); //este mensaje nunca se va a ejecutar
}
//Siempre primero creo las funciones luego las llamo

//Otra forma de definir funciones sería
const saludar2 = function(nombre) { //esta sería la mejor pero no la tradicional
    console.log("Hola " +nombre);
}

//Funciones de Flecha

const saludarFlecha = () => {
    console.log("Hello Friend");
}

const saludarFlecha2 = (nombre) => { // los parentesis del argumento son opcionales pero es buena practica ponerlos
    console.log("Hello Friend " + nombre);
}

const retornoDeSaludar = saludar('Adrian', 21, false, 'Hyrule' );//retorna un 1
console.log(retornoDeSaludar [0], retornoDeSaludar[1]);


// saludar2('Adrian');
// saludarFlecha();
// saludarFlecha2('Elliot')


function sumar (a, b){
    return a + b;
}

//Pueod resumir la siguiente funcion (solo si tiene una linea)
// const sumar2 = (a,b) =>{
//     return a + b;
// }
//en
const sumar2 = (a,b) => a+b;

function getAleatorio (){
    return Math.random();
}
//Transformar la funcion anterior a una funcion de flechas que
// no tenga llaves y se va a llamar  getAleatorio2()

const getAleatorio2 = ()=> Math.random();


console.log(  sumar2(1,2) );
console.log(getAleatorio()); 
console.log(getAleatorio2());