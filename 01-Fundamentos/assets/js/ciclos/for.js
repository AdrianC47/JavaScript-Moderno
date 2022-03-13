
const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];

console.warn('For Tradicional');
for (var i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

console.log(i);

console.warn('For in');
for (let i in heroes) { //el For in hace lo mismo que el for tradicional pero mucho mas limpio
    console.log(heroes[i]);
}

console.warn('For Of');
for (let heroe of heroes) { //el For of hace lo mismo que el for tradicional pero mucho mas limpio y no debo indicar
    console.log(heroe);     //que en mi arreglo haga algo sobre cierta posicion sino solo mando el iterador
}