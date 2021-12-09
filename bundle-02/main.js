/*******************************************************************************
​
    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    const message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
}
checkAge();
// 1- il codice dovrebbe restituire un messaggio in base all'età dell utente.
// 2- questo codice presenta un errore di sintassi. ( confrontare con correzione )
// 3- questo codice non presenta un errore di logica.
// soluzione:
/* 
function checkAge() {
  const myAge = 32;
  const myAge = 12; (test delle 2 condizioni)
  let message = '';

  if (myAge < 18) {
      message = 'Sei troppo giovane! Hai ' + myAge + ' anni!';
      console.log(message);
  } else {
      message = 'Hai più di 18 anni!';
      console.log(message);
  }
}
checkAge();
*/

// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
}
printColorsNumber();
// 1- il codice dovrebbe restituire un messaggio con il numero di colori all'interno dell'array colors.
// 2- questo codice presenta un errore di sintassi. ( confrontare con correzione )
// 3- questo codice presenta un errore di logica.
// soluzione:
/* 
function printColorsNumber() {
  const colors = ['blue', 'red', 'yellow', 'green', 'black'];
  let message = 'Nella mia palette ci sono ' + colors.length + ' colori!';
  console.log(message);
}
printColorsNumber();
*/


// ESERCIZIO 3
function addNumbers() {
    const userNumber = prompt('Inserisci un numero');
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();
// 1- il codice dovrebbe restituire un messaggio con il numero di colori all'interno dell'array colors.
// 2- questo codice presenta un errore di sintassi. ( userNumbers veniva salvato come stringa anziché come numero da sommare nel totale)
// 3- questo codice non presenta un errore di logica.
// soluzione:
/* 
function addNumbers() {
  const userNumber = parseInt(prompt('inserisci un numero'));
  const total = userNumber + 12;

  console.log(`Il risultato finale è ${total}`);
}
addNumbers();
*/


// ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    if (addresses.includes(userEmail)) {
        grantAccess = 'true';
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();
// 1- il codice dovrebbe verificare la presenza o meno dell'email utente fornita da input, se presente consentire accesso, se non è presente negare l'accesso.
// 2- questo codice presenta un errore di sintassi. ( i booleani sono salvati come string non come booleano)
// 3- questo codice non presenta un errore di logica.
// soluzione:
/* 
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    if (addresses.includes(userEmail)) {
        grantAccess = 'true';
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();
*/


// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    for (let i = 0; i < addresses.length; i++) {
     const email = addresses[i];
        
      if (userEmail.length > 5) {
            
        if (email === userEmail) {
        grantAccess = 'true';            
            
      }
        
    }

    if (grantAccess) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccessImproved();
// 1- come l'esercizio precedente controllo della presenza email e verifica di accesso con ciclo for.
// 2- questo codice presenta un errore di sintassi. ( manca una parentesi graffa che chiuda la funzione checkAccessImproved)
// 3- questo codice non presenta un errore di logica.
// soluzione:
/* 
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    for (let i = 0; i < addresses.length; i++) {
     const email = addresses[i];
        
      if (userEmail.length > 5) {
            
        if (email === userEmail) {
        grantAccess = 'true';            
            
      }
        
    }

    if (grantAccess) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}}
checkAccessImproved();
*/
