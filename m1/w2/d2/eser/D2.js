/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
In javascript possiamo inizializzare le variabili definendole attraverso dati. Questi dati possono avere diverse entità ed ognuno si comporta in modo differente dalle altre.
 - il dato stringa sta ad indicare un valore caratteriale ovvero indica un carattere ma anche la sequenza di caratteri. esempio=  var stringa='ciao' (ciao sarebbe la stringa)
 -il Dato Numerico indica invece un valore numerico, ovvero un numero intero e decimale. esempio= var numeroint=15   var numerodec=15.24 
 - il Dato Booleano restituisce solo due valori, ovvero true o false, solitamente questo tipo di dato viene utilizzato nei controlli condizionali. esempio 
  */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var name='osema'

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
<script>
var a=12
var b=20
var somma=a+b 
console.log(somma);  
</script>
//il console.log l'ho utilizzato epr controllare il risultato.
/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.

*/

/* SCRIVI QUI LA TUA RISPOSTA */
var x=12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var name='osema'
const name='osema'
console.log(name)
//in javascript una variabile gia inizializzata non può essere sostituita da un'altra, infatti una volta usato il console.log, per controllare se è stato stampato il valore di name ovvero 'osema', possiamo visualizzare un messaggio con scritto :"Identifier 'name' has already been declared" ('name' è stata già dichiarata)

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
 
/* SCRIVI QUI LA TUA RISPOSTA */
var x=12
var sott=4-x
console.log(sott)
//ho assegnato il 12 alla variabile "x", poi ho creato una variabile ("sott") in cui ho effettuato la sottrazione tra il 4 e la x. infine con il console.log ho fatto il controllo della sottrazione

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var name1='john'
var name2='John'
    if(name1===name2){
        result=true 
    }else 
        result=false
        console.log(result)
      
    //EXTRA invece per trasformare la variabile name2 in minuscolo dobbiamo assegnare ad essa toLowerCase(). esempio  :   name2=name2.toLowerCase()
  /*se faccio la condizione dell'uguaglianza dopo averla trasformata in minuscolo mi dara true */
