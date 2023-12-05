/*

Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi "Buzz".
Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".

Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?

Consigli del giorno:
1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.

BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

*/

/*
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi "Buzz".
Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".
*/

// ciclo for con numeri da 1 a 100 con avanzamento di 1
for (let number = 1; number <= 100; number++) {

    //se divisibile per 3 e 5 dando resto 0 come prima condizione stampa fizzbuzz
    if (number % 3 == 0 && number % 5 == 0) {
        console.log("FizzBuzz");
    
    //se divisibile per 3 dando resto 0 stampa fizz
    } else if (number % 3 == 0) {
        console.log("Fizz");

    //se divisibile per 5 dando resto 0 stampa buzz
    } else if (number % 5 == 0) {
        console.log("Buzz");

    //altrimenti stampa in numero
    } else {
        console.log(number);
    }

}
