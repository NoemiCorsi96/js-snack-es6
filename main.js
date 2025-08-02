//ESERCIZI SUGLI OGGETTI

/* Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
 */

const biciclette = [
    {
        nome: 'bici_1',
        peso: 3
        
    },
    {
        nome: 'bici_2',
        peso: 5.4
        
    },
    {
        nome: 'bici_3',
        peso: 30
        
    },
    {
        nome: 'bici_4',
        peso: 2.4
        
    }
]

//io so quale è la più leggera e posso vederla così:

const bici_leggera = biciclette[3];
console.log(bici_leggera);

//devo poterla trovare in modo DINAMICO 
let biciclettaLeggera = biciclette[0];

for (let i = 0; i < biciclette.length; i++){
    const thisBike = biciclette[i];
    if (thisBike.peso < biciclettaLeggera.peso) {
        biciclettaLeggera = thisBike;
    }
}
console.log(biciclettaLeggera);



/*Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */


const squadre = [
  {
    name: 'Juventus',
    points: 0,
    fouls: 0
  },
  {
    name: 'Inter',
    points: 0,
    fouls: 0
  },
  {
    name: 'Milan',
    points: 0,
    fouls: 0
  },
  {
    name: 'Fiorentina',
    points: 0,
    fouls: 0
  }
]