
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
//el For of hace lo mismo que el for tradicional pero mucho mas limpio y no debo indicar
// el indice, lo normal es usar aquí directo el singular del arreglo osea de heroes seria heroe

for (let heroe of heroes) { 
    console.log(heroe);     
}