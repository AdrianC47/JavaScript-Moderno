/**
 *2C= Two of Clubs(Tréboles) 
 *2D= Two of Diamonds(Diamantes) 
 *2H= Two of Hearts(Corazones) 
 *2S= Two of Spades(Espadas) 
*/

let naipe = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

//Esta funcion crea un nuevoNaipe
const crearNaipe = () => {
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            naipe.push(i + tipo);
        }
    }
    for (let tipo of tipos) {
        for (let esp of especiales) {
            naipe.push(esp + tipo);
        }
    }

    // console.log(naipe);
    naipe = _.shuffle(naipe); //haciendo uso de la libreria puedo desordenar un arreglo
    console.log(naipe);
    return naipe;
}
crearNaipe();


//Esta funcion me permite tomar una carta
const pedirCarta = () => {
    //ojo que no se puede usar el pop si no hay elementos en el arreglo por lo que se valida eso haciendo un if
    if (naipe.length === 0) {
        throw 'No existen cartas en el naipe!!';
    }
    const carta = naipe.pop();
    console.log(naipe);
    console.log(carta); //carta debe ser tomada de la baraja
    return carta;


}

// pedirCarta();

const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 :10
        : valor *1;

    // let puntos = 0;
    // if (isNaN(valor)) {
    //     // console.log('No es un  numero');
    //     puntos = (valor === 'A') ? 11 : 10; //aqui no se multiplica por 1 ya se estan manejando y retornando como numeros los puntos
    // } else {
    //     // console.log('Es un número');
    //     puntos = valor * 1;//multiplico por 1 para que la variable valor se transforme en un numero
    // }
    // console.log(puntos);
}

const valor =valorCarta(pedirCarta());
console.log({valor});