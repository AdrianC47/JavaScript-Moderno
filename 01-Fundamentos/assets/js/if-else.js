

let a = 10;

if (a >= 10) { // usualmente aqui se mandan valores booleanos pero existen excepciones como el undefined, null, una asignacion
    console.log("A es mayor o igual a 10");
} else {
    console.log("A es menor a 10");
}

//console.log('Fin de programa');

const hoy = new Date();//{}

console.log(hoy);
let dia = hoy.getDay();// 0:Domingo, 1:Lunes, 2:martes .....
console.log({ dia });


/*
= es para  asignacion
== es un booleano que compara pero sin tomar en cuenta si son iguales los tipos de valor
=== aqui igual es un booleano que compara pero SI toma en cuenta si son iguales los tipos de valor es decir por ejemplo
si string es === a string
*/

if (dia === 0) {
    console.log('Domingo');
} else if (dia === 1) {
    console.log('Lunes');
    // if (dia === 1) {
    //     console.log('Lunes');
    // } else {
    //     console.log('No es Lunes ni Domingo');
    // }

} else if (dia === 2) {
    console.log('Martes');
}else if (dia ===3){
    console.log('Miercoles');
}else if (dia ===4){
    console.log('Jueves');
}else if (dia ===5){
    console.log('Viernes');
}else if (dia ===6){
    console.log('Sabado');
}