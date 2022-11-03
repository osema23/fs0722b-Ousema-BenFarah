/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var n1=10
var n2=15
if (n1>n2){
  console.log('il più grande e', n1)
}else if(n1<n2){
  console.log('il più grande è', n2)
}else 
  console.log('i numeri sono uguali')
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if(a!=5)
{
  console.log('not equal')
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var n=5
var risultato = n % 5 == 0;
mex= risultato ? 'è divisibile' : 'non è divisibile'
console.log(mex)
/*nella riga 27 ho controlalto se il risultato della divisione fosse uguale a zero. nella riga 28 ho fatto una condizione in cui ho scritto "se il risultato è true allora è divisibile, invece se è false non è divisibile" */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */  
var n1=4
var n2=4
if(n1===8){
  console.log('n1 è uguale ad 8')
}else if (n2===8){
  console.log('n2 è uguale ad 8')
}else {
    console.log('entrambi i numeri sono diversi da 8')
}

if(n1+n2 === 8){
    console.log('la somma dei numeri è uguale a 8')

}
else if(n1-n2 ===8){
    console.log('la sottrazione dei numeri è uguale a 8')
}else{
    console.log('sia la somma che la differenza è diversa da 8')
}
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var totalShoppingCart = 40
if(totalShoppingCart>=50){
  console.log('hai diritto alla spedizione gratuita')
} else 
totalShoppingCart+= 10
console.log('non hai diritto alla spedizione e devi pagare', totalShoppingCart)

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var totalShoppingCart = 40
if(totalShoppingCart>=50){
  var sconto = (20/100)*totalShoppingCart
  console.log('hai diritto alla spedizione gratuita e il prodotto con il black friday costa', totalShoppingCart-sconto)
} else if(totalShoppingCart<50){
    var sconto = (20/100)*totalShoppingCart
console.log('non hai diritto alla spedizione gratuita e il prodotto con il black friday costa', totalShoppingCart-sconto)}


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var n1=5
var n2=7
var n3=4
if(n1>n2 && n1>n3 && n2>n3)
{
   console.log(n1,n2,n3)
}else if(n2>n1 && n2>n3 && n1>n3){
    console.log(n2,n1,n3)
}else if(n3>n2 && n3>n2 && n2>n1){
    console.log(n3,n2,n1)
}else 
console.log(n3,n1,n2)



/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var t=5
if(isNaN(t)){
  console.log('non è un numero')
}else 
console.log('è un numero')

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var n=5
var risultato = n % 2 == 0;
mex= risultato ? 'è pari' : 'è dispari'
console.log(mex)

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 45
if (val < 10 && val > 5) {
    console.log("Meno di 10");
  } else if (val < 5 ) {
    console.log("Meno di 5");
  } else {
    console.log("Uguale a 10 o maggiore");
  }


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css',],
}

/* SCRIVI QUI LA TUA RISPOSTA */
  const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css']
  }
  me.city = 'Toronto'
  console.log(me)
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const me = {
  name: 'John',
  lastName: 'Doe',
  city:'toronto',
  skills: ['javascript', 'html', 'css']
  }
  delete me.lastName;

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const me = {
  name: 'John',
  lastName: 'Doe',
  city:'toronto'
  skills: ['javascript', 'html', 'css']
  }
  delete me.skills[2];
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var array =[]
array.push =(1,2,3,4,5,6,7,8,9,10)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var array =[1,2,3,4,5,6,7,8,9,10]
array[9]=100
console.log(array)
