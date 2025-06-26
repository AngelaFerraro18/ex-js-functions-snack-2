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

let somma = (num1, num2) => num1 + num2;

console.log(somma(55, 9));


/* Crea una arrow function che calcola il quadrato di un numero. 
Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.
*/

const quadrato = (num) => num * num;

console.log(quadrato(2));

