

const regresaTrue = () =>{
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

console.log('4 condiciones',true && true && true && false);//? aquí saldría falso

console.warn('OR'); // true // basta que uno sea verdadero para que salga verdadero
console.log(true || false);

console.log(regresaTrue() || regresaFalse());//aqui por ser un OR ejecuta o el uno o el  otro

console.log('4 condiciones',true || true || true || false);//? aquí saldría verdadero

console.warn('Asignaciones');