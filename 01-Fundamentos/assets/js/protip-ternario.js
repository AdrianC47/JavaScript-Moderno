const  elMayor =  (a,b)=> (a>b ) ? a : b;
console.log(elMayor(20,15));

const   tieneMembresia = (miembro)=>(miembro) ? '2 Dolares' :'10 Dolares';
console.log(tieneMembresia(false));

const amigo = false;
const amigosArrr = [
    'Peter',
    'Tonny',
    'Dr. Strange',
    amigo ? 'Elliot': 'WhiteRose',
    (()=> 'Nick Fury')(),   //Funcion anonima autoinvocada
    elMayor(10,15)
];

console.log(amigosArrr);

const nota = 82; //A+ A B+
const grado  = nota >=95? 'A+' : 
               nota >=90? 'A' :
               nota >=85? 'B+' :
               nota >=80? 'B' :
               nota >=75? 'C+' :
               nota >=70? 'C' : 'F';

console.log({nota, grado});