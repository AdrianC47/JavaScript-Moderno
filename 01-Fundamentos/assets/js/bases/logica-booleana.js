

const regresaTrue = () => {
    console.log('Regresa True');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa False');
    return false;
}

console.warn('Not o la Negación');
console.log(true);// true
console.log(!true);// false
console.log(!false);// true
//se puede poner !!!! n veces pero pocas veces se necesita hacerlo

console.log(!regresaFalse());//true

console.warn('And'); // true si todos los valores son verdaderos
console.log(true && true);//true
console.log(true && !false);//false  

console.log('=============');
console.log(regresaFalse() && regresaTrue()); //false 
console.log(regresaTrue() && regresaFalse()); //false

/*
Cuando se llama o usa un AND y la primera expresión ya 
arrojó un valor falso pues JavaScript lo que  hace es 
dejar de evaluar en sí la expresión ya que ya obtuvo un falso.
 */

console.log('===== &&  ====');
regresaFalse() && regresaTrue();

console.log('4 condiciones', true && true && true && false);//? aquí saldría falso

console.warn('OR'); // true // basta que uno sea verdadero para que salga verdadero

console.log(true || false);

console.log(regresaTrue() || regresaFalse());//aqui por ser un OR ejecuta o el uno o el  otro

console.log('4 condiciones', true || true || true || false);//? aquí saldría verdadero

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;
//Esto es una asignación 
//const a1 = true && 'Hola Amigo' && 150;//? aquí se le asigna el último valor a la variable pero primero va evaluando los otros valores siempre //y cuando sean verdaderos
const a1 = false && 'Hola Amigo' && 150; // aqui se le asigna el primer valor ya que es un falso y como son AND ya deja de evaluar los otros terminos
const a2 = 'Hola' && 'Amigo' && soyFalso && true;
const a3 = soyFalso || 'Ya no soy falso'; 
// El operador OR (||) devuelve el primer operando si éste puede ser convertido a true; de lo contrario, devuelve el ultimo operando.
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;

console.log({ a1, a2, a3, a4, a5 });
console.log('Por Mil Noches');
if (regresaFalse() && regresaTrue() && (true || false ||  true)) { // no es recomendable tener mas de 3 condiciones
    console.log('Hacer algo');
} else {
    console.log('Hacer otra cosa');
}
