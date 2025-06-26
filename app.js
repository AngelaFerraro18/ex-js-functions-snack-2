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