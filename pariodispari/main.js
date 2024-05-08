// utente inserisce un numero da 1 a 5
const userNumber = +(prompt('inserisci un numero'));// trasformo il numero dà string à number
console.log('Numero utente',userNumber);

// utente sceglie pari o dispari

let userChoice = prompt('inserisci pari o dispari');
userChoice = userChoice.toLowerCase();//trasformo tutti i carateri in minuscolo
console.log(userChoice);


function gtnNumberRandom (num1,num2){
    const result = Math.floor(Math.random() * num2) + num1;
    return  result;
}

const computerNumber = gtnNumberRandom(1,5);
console.log('Numero computer',computerNumber);  // genero un numero random da 1 a 5 per il computer e lo salvo in unà variabile

sum = computerNumber + userNumber;
// sommo il numero del computer èil numero dell'utente
console.log (sum);

// creo una funzione che stabilisca se un numero e pari o e dispari
// se il risultato della funzione e pari e l'utente ha scelto pari allora a vinto l'utente
// altrimenti a vinto il computer.