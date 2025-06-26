/* Crea una funzione che somma due numeri: 
- crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma;
- Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile;
-Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.
*/


// function somma(num1, num2) {
//     return num1 + num2;
// }

// console.log(somma(3, 8));

// let somma = function (num1, num2) { return num1 + num2 }

// console.log(somma(40, 5));

const somma = (num1, num2) => num1 + num2;

console.log(somma(55, 9));


/* Crea una arrow function che calcola il quadrato di un numero. 
Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.
*/

const quadrato = (num) => num * num;

console.log(quadrato(2));

/* Crea una funzione eseguiOperazione. 
Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.
*/

const eseguiOperazione = (num1, num2, operazione) => operazione(num1, num2);

const sottrazione = (num1, num2) => num1 - num2;
const divisione = (num1, num2) => num1 / num2;

console.log(eseguiOperazione(40, 8, sottrazione));
console.log(`Il risultato della divisione è: ${eseguiOperazione(64, 8, divisione)}`);


/* Crea un generatore di funzioni creaTimer.
Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".
*/

function creaTimer(tempo) {
    return function () {
        setTimeout(() => {
            console.log("Tempo scaduto!")
        }, tempo);
    };
};

const timer = creaTimer(1000);
timer();


/*Crea una funzione stampaOgniSecondo con setInterval.
Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.
*/