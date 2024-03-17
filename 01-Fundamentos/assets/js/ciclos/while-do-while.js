

const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];
console.log("Bucle While")
let i = 0;
// while (i < carros.length) { // se aconseja que la condicion sea verdadera
//     console.log(carros[i]);
//     //i = i + 1;
//     i++;
// }

//Condiciones falsas
console.warn('While');
//undefined
//null
//false

while (carros[i]) { // se aconseja que la condicion sea verdadera
    if (i ===1){
        // break;
        i++;
        continue; //el continue lo que hace es pasar a la siguiente iteración
    }
    console.log(carros[i]);
    //i = i + 1;
    i++;
}

console.warn('Do While');
let j=2;
do {
    console.log(carros[j]);
    j++;
} while(carros[j]); //se imprime hasta que existe el lugar con el indice donde se asigna la posición