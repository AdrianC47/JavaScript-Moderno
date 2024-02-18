console.log(console.log("Hello friend"));

// alert('Hola desde app.js');
//let a = 10;//Ambas variables let y var
//var b = 10; //sirven para decirle a Javascript que estoy creando una nueva variable 
//const c = 10;// la diferencia es que no voy a poder cambiar el valor de una variable const

//var es una forma antigua de inicializar una variable


//c = 20; //esto no se puede hacer
// d = 40; esto es mala practica siempre debo inicializar mi variable
//a = 20;
//b = 30;

/*
Let te permite declarar variables limitando su alcance (scope) al bloque, declaración o expresión donde se está usando.
A diferencia de la palabra clave var la cual define una variable global o local en una función sin importar el ámbito
del bloque*/ 
// let a = 10, b = 20, c = 10, d = 10, x = a + b;
let a = 10, 
    b = 20, 
    c = 'Hola ', 
    d = 'Spiderman', 
    x = a + b;

const saludo = c + d;
console.log(saludo);

console.log("%c Mis variables", 'color:cyan; font-weight: bold')// de esta forma puedo darle estilo a mi console.long
console.log({ a }); //con las llaves imprimo la variable y su valor
console.warn({ b });
console.error({ c });
console.info({ d });

c = 'Hola de nuevo';
console.table({a, b, c, d, x});//se usa cuando se necesita imprimir varias variables

let miNuevoNombre = 'AdryC47';