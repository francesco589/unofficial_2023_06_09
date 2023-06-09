/*
Esercizio 1: Letterali oggetti
Scrivi una funzione che prenda in input un array di 6 oggetti rappresentanti persone (nome, cognome, età) e restituisca un nuovo array contenente solo le persone con un'età superiore a 30 anni. Stampare le informazioni di tutte le persone del nuovo array.
*/
{
//define a Object Array
const people = [
    {
        nome: "Fiorenzo",
        cognome: "mancini",
        eta: 65
    },
    {
        nome: "Divo",
        cognome: "Genovese",
        eta: 34
    },
    {
        nome: "Graziella",
        cognome: "Zetticci",
        eta: 22
    },
    {
        nome: "Michelina",
        cognome: "Schiavone",
        eta: 15
    },
    {
        nome: "Ambra",
        cognome: "Pirozzi",
        eta: 29
    },
    {
        nome: "Adriana",
        cognome: "Greco",
        eta: 26
    }

] 
//define the function
function areYou30(arr){
    let thirty = arr.filter(obj => obj.eta > 30); 
    return thirty;
}
//Print the function output
console.log(areYou30(people));

}

/*
Esercizio 2: Map
Scrivi una funzione chiamata moltiplicaArray che prenda in input un array di numeri e un numero intero, che funge da "fattore di moltiplicazione". La funzione deve restituire un nuovo array in cui ogni numero dell'array originale è moltiplicato per il fattore di moltiplicazione dato. Chiamare la funzione 3 volte, con 3 array e 3 fattori di moltiplicazione differenti per stampare in output i 3 array prodotti.
*/
{
//define the array
const numbers = [50, 65, 78, 41, 63];

//define the function
function moltiplicaArray(arr, n){
    let multip = arr.map(el => el * n);
    console.log(multip) //? or return 
}
moltiplicaArray(numbers, 3); // or console.log?
moltiplicaArray(numbers, 5);
moltiplicaArray(numbers, 7);
}

/*
Esercizio 3: Set
Scrivi una funzione chiamata unisciSet che prenda in input due set composti da 5 numeri ciascuno, e restituisca un nuovo set contenente tutti gli elementi del primo che NON sono presenti nel secondo. Stampare in output il set risultante.
*/
// {
// const numbers1 = new Set([14, 58, 95, 7, 37]);
// const numbers2 = new Set([7, 85, 37, 41, 58]);

// function unisciSet(set1, set2){
// let newset = new Set() 
// set1.forEach(el => if(el == set2){}
// else{}
// );
// return newset
// }

// console.log(unisciSet(numbers1, numbers2))
// }

/*
Esercizio 4: Funzioni
Crea una funzione chiamata salutaPersona che prende in ingresso un oggetto. Se l'oggetto passato come parametro NON ha una proprietà chiamata "rate", la funzione stampa il messaggio "nessun rate". In caso contrario, se il valore della proprietà rate è compreso tra 0 e 10, stampa "rate basso", se è compreso tra 11 e 50 stampa "rate medio", se è compreso tra 51 e 100 stampa "rate alto".
es salutaPersona({nome: mario rossi}) -> nessun rate salutaPersona(rate: 95) -> rate alto
*/

{


function salutaPersona(obj){
let output = obj.rate ? obj.rate > 10 ? obj.rate > 50 ? "rate alto" : "rate medio" : "rate basso" : "nessun rate"
console.log(output)
}

salutaPersona({
    nome: "Anna Longhi", 
})

salutaPersona({
    nome: "Fabrizio Rossi",
    rate: 9 
})
salutaPersona({
    nome: "Giovanna Arcuri",
    rate: 45 
})
salutaPersona({
    nome: "Fabrizio Longhi",
    rate: 60 
})
}

