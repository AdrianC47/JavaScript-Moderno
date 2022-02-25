function saludar(nombre) {
    console.log(arguments);//Con esto imprimo los argumentos de la funcion asi no sean usados
    console.log("Hola " +nombre);
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

saludar('Adrian', 21, false, 'Hyrule' );
saludar2('Adrian');
saludarFlecha();
saludarFlecha2('Elliot')
