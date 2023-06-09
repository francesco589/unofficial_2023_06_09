/*
Esercizio 1: Letterali oggetti
Scrivi una funzione che prenda in input un array di 6 oggetti rappresentanti persone (nome, cognome, età) e restituisca un nuovo array contenente solo le persone con un'età superiore a 30 anni. Stampare le informazioni di tutte le persone del nuovo array.
*/
{
console.log("-----------Esercizio 1-----------")
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
    return thirty.forEach(el => console.log(`nome: ${el.nome}, cognome: ${el.cognome}, eta: ${el.eta}`));
}
//call the function
areYou30(people);

}

/*
Esercizio 2: Map
Scrivi una funzione chiamata moltiplicaArray che prenda in input un array di numeri e un numero intero, che funge da "fattore di moltiplicazione". La funzione deve restituire un nuovo array in cui ogni numero dell'array originale è moltiplicato per il fattore di moltiplicazione dato. Chiamare la funzione 3 volte, con 3 array e 3 fattori di moltiplicazione differenti per stampare in output i 3 array prodotti.
*/
{
console.log("-----------Esercizio 2-----------")
//define the array
const numbers = [50, 65, 78, 41, 63];

//define the function
function moltiplicaArray(arr, n){
    let multip = arr.map(el => el * n);
    multip.forEach(el => console.log(el)) //? or return 
}
moltiplicaArray(numbers, 3); // or console.log?
console.log("----------------------")
moltiplicaArray(numbers, 5);
console.log("----------------------")
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
console.log("-----------Esercizio 4-----------")

function salutaPersona(obj){
    let output = (obj.rate) ? (obj.rate > 10) ? (obj.rate > 50) ? "rate alto" : "rate medio" : "rate basso" : "nessun rate"
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

/*
Esercizio 1: Date
Scrivi una funzione chiamata calcolaGiorni che prenda in input due oggetti Date rappresentanti due date diverse e restituisca il numero di giorni trascorsi tra le due date. Chiamare la funzione per stampare in output il risultato. La funzione deve prendere in considerazione questa caratteristica: se la seconda data è un giorno cronologicamente pari o successivo alla prima data, si procede con la normale esecuzione sopra elencata. Se la seconda data è un giorno cronologicamente precedente alla prima data, viene prodotto manualmente un errore che blocca l'applicazione.
*/

{
console.log("-----------Esercizio 1 medio-----------")

const date1 = new Date("2022-02-12")
const date2 = new Date("2022-02-16")

function calcolaGiorni(da1, da2){

    if(da1.getTime() <= da2.getTime()){
        console.log((da2.getTime() - da1.getTime()) / (1000*60*60*24))
    }
    else{
    throw "la seconda data passata dal parametro risulta cronologicamente antecedente"
    }

}
calcolaGiorni(date1, date2)
}

/*
Esercizio 2: Letterali oggetti
Scrivi una funzione confrontaOggetti che prenda in input due oggetti con caratteristiche (proprietà e valori) scelti a piacere e restituisca true se hanno le stesse proprietà e se tutti i valori delle loro proprietà corrispondenti sono uguali, altrimenti false. es o1 = {nome: mario, cognome = rossi} o2 = {nome: mario, cognome = rossi} confrontaOggetti(o1, o2) da true
o1 = {nome: mario, cognome = rossi} o2 = {x: 10, y = 20} confrontaOggetti(o1, o2) da false
*/
//  {

// const persona1 = {
//     nome: "Giovanni",
//     cognome: "Rossi"
// } 
// const persona2 = {
//     nome: "Giovanni",
//     cognome: "Rossi"
// } 
// function confrontaOggetti(obj1, obj2){
//     for(let key in obj1){
//         for(let key in obj2){
//         if(obj1.key)
//     }
//     };

    
// }
// console.log(confrontaOggetti(persona1, persona2))
//  }

/*
Esercizio 3: Funzioni come parametri e metodo map
Scrivi una funzione chiamata mappaNumeri, che prende come primo parametro un array di numeri, e come secondo parametro una funzione che internamente a mappaNumeri sarà utilizzata come parametro per il metodo map, chiamato per creare un nuovo array con il criterio utilizzato dalla funzione passata. Questo array verrà stampato internamente a mappaNumeri. Chiamare la funzione mappaNumeri 2 volte, sia per stampare il doppio dei numeri dell'array passato come primo parametro, sia per stampare i suoi numeri aumentati di 10.
es mappaNumeri( [10, 20, 30], ?fn? ) stampa 20 40 60 mappaNumeri( [10, 20, 30], ?fn? ) stampa 20 30 40
dove ?fn? saranno le apposite funzioni passate come parametro create da voi
*/

{
console.log("-----------Esercizio 3 medio-----------")

const numbers = [50, 45, 85, 68, 78, 35]

function mappaNumeri(arr, fn){
    arr.map(fn).forEach(el => console.log(el))

}

mappaNumeri(numbers, x => (x * 2));
mappaNumeri(numbers, x => (x + 10));

}
console.log("-----------Esercizio 1 Hard-----------")
/*
Esercizio 1
Dato il seguente JSON:
convertirlo in una controparte Javascript da utilizzare nel programma. Creare una funzione chiamata dammiPersonaggio, che prende in ingresso come primo parametro un array di personaggi come quello prodotto dal JSON. Come secondo parametro, prende una stringa. Se la stringa è "cicla", la funzione stampa le informazioni di tutti i personaggi. Se la stringa è "giovane", la funzione stampa le informazioni del personaggio più giovane. Se la stringa è "migliore", la funzione stampa le informazioni del personaggio con la media rate più alta. Se la stringa è "peggiore", la funzione stampa le informazioni del personaggio con la media rate più bassa. Se il secondo parametro non è una stringa, generare un errore manualmente.
Chiamare la funzione dammiPersonaggio con tutti i test case, impedendo che l'applicazioni si blocchi se non viene passata una stringa (hint: usare un try/catch). Quando si stampano le informazioni di un personaggio, non bisogna stampare
*/
{
const json = `[
    {"name": "aladddin", "rate": [5,6,7], "birthdate": "1990-10-10"},
    {"name": "jasmine", "rate": [8,9,9], "birthdate": "1994-09-09"},
    {"name": "abu", "rate": [2,2,3], "birthdate": "1993-10-20"}
  ]`

let jsonParsed = JSON.parse(json)


function dammiPersonaggio(objarr, strin){
let giovane = new Date(objarr[1].birthdate)
    switch(strin) {
        case "cicla": 
        return objarr.forEach(el => console.log(`nome: ${el.name}, punteggio: ${el.rate}, Data di nascita: ${el.birthdate}`));
        case "giovane": 
        return objarr.filter(el => new Date(el.birthdate).getTime() < giovane.getTime() )

    };
    
    
    }


dammiPersonaggio(jsonParsed, "giovane")

}