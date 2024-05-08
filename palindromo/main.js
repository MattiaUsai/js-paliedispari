




function ispalindrom(word) {

   let start = 0
   let end = word.length -1

   while (start<end) {
    if (word[start] !== word[end]) return false;
    start++;
    end--;
    
   }

   
   return true;



}


const ciao = prompt('inserisci unà parola');


if (ispalindrom(ciao) ) {
    console.log (`${ciao} 'è un palindromo'`)

}else {
    console.log (`${ciao} 'non è un palindromo'`)
}