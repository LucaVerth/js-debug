/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}
// 1- questo codice non fa niente. (il ciclo dovrebbe contare da 0 a 5)
// 2- questo codice presenta un errore di sintassi. ( i > 5 )
// 3- questo codice presenta un errore di logica. (se i = 0 i non sarà mai piu grande di 5 quindi la condizione del ciclo non è valida)
// soluzione:
/* 
for (let i = 0; i <= 5; i++) {
    console.log(i);
}
*/

// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}
// 1- questo codice dovrebbe restituire il numero scelto + 5 se il numero scelto è pari, se il numero scelto è dispari, restituisce il numero scelto.
// 2- questo codice presenta un errore di sintassi. ( num % 2 = 0 )
// 3- questo codice non presenta un errore di logica.
// soluzione:
/* 
addIfEven(num):

function addIfEven(num) {
    if (num % 2 == 0) {
        return num + 5;
    }
    return num;
}
*/


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}
// 1- come il primo esercizio la funzione dovrebbe contare fino a 5 
// 2- questo codice presenta un errore di sintassi. ( let i = 0, i < 5, )
// 3- questo codice presenta un errore di logica. la funzione conta solamente da 0 a 4
// soluzione:
/* 
function loopToFive() {
    for (let i = 0; i <= 5; i++) {
        console.log(i);
    }
}
*/


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]
// 1- il codice dovrebbe restituire un array contenente numeri pari
// 2- questo codice presenta un errore di sintassi. ( confrontare con correzione )
// 3- questo codice presenta un errore di logica.
// soluzione:
/* 
function evenNumber(){
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  let evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      evenNumbers.push(numbers[i]);
    }
  }
}
evenNumber();
*/