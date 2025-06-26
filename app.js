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

function stampaOgniSecondo(message) {
    return function () {
        const timer = setInterval(() => {
            console.log(message);
        }, 1000);
        return timer;
    }
}

const messaggio = stampaOgniSecondo('Ciao');
const intervallo = messaggio();

setTimeout(() => {
    clearInterval(intervallo);
    console.log('Tempo interrotto!');
}, 5000);

/* Crea un contatore automatico con setInterval.
Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.
*/

function creaContatoreAutomatico(tempo) {
    return function () {

        let count = 0;

        const intervalloContatore = setInterval(() => {
            count++;
            console.log(count);
        }, tempo);
        return intervalloContatore;
    }
}

const tempoAutomatico = creaContatoreAutomatico(1000);
const interruzione = tempoAutomatico();

setTimeout(() => {
    clearInterval(interruzione);
    console.log('Contatore interrotto!')
}, 20000)

/*
Crea una funzione che ferma un timer dopo un certo tempo.
Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.
*/

function eseguiEferma(message) {
    const eccomiInterval = setInterval(() => {
        console.log(message)
    }, 1000);

    return function () {
        setTimeout(() => {
            clearInterval(eccomiInterval);
            console.log('Me ne vado')
        }, 6000)
    }
}

const esegui = eseguiEferma('Eccomi');
esegui();

/*Crea una funzione che simula un conto alla rovescia
Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer. */


function contoAllaRovescia(num) {

    const countDown = setInterval(() => {
        console.log(num);
        num--;


        if (num < 1) {
            clearInterval(countDown);
            console.log('Tempo scaduto!')
        }
    }, 1000)

}

contoAllaRovescia(10);


/*Creare una funzione che esegue una sequenza di operazioni con ritardi
Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.

Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo. */

function sequenzaOperazioni(operazioni, intervallo) {
    operazioni.forEach((operazione, index) => {
        setTimeout(() => {
            operazione();
        }, intervallo * index)
    })
}

function sommiamo(num1, num2) {
    return num1 + num2
};

function moltiplico(num1, num2) {
    return num1 * num2;
}

function raddoppio(num1) {
    return num1 * 2;
}

sequenzaOperazioni([
    () => console.log(`Operazione 1: ${sommiamo(1, 6)}`),
    () => console.log(`Operazione 2: ${moltiplico(2, 7)}`),
    () => console.log(`Operazione 3: ${raddoppio(10)}`)
], 2000);


/*Creare un throttler per limitare l’esecuzione di una funzione
Scrivi una funzione creaThrottler che accetta una funzione e un tempo `limite`.

Restituisce una nuova funzione che, quando chiamata ripetutamente, esegue l'operazione originale al massimo una volta ogni n millisecondi. */

function creaThrottler(funzione, tempoLimite) {

    let ultimaEs = 0;

    return function (...args) {

        const ora = Date.now();

        if (ora - ultimaEs >= tempoLimite) {
            ultimaEs = ora;
            funzione(...args);
        } else {
            console.log('Non posso eseguire');
        }
    }
}

const throttler = creaThrottler(() => console.log('Eseguito!'), 2000);
throttler();

