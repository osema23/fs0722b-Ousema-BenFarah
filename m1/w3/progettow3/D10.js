/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.*/
  const eserA = function () {
    let a = 10
    let b= 20 
    let somma = a+b //sommo le due variabili
    console.log(somma)
  }
  eserA()
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
const eserB = function (){
  num=Math.round(Math.random()*100);  //uso metodo Math.random per generare un un mero casuale 
  console.log(num)
}
eserB();

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
var a = []
function agg() {
  let me = {   //creo la variabile me e creo un oggetto
    name: "Ousema",
    surname: "Ben Farah",
    ege: "21"
  };
  a.push(me);    //aggiungo l'oggetto creato precedentemente in un array 
  console.log(a);
}
agg()
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
var a = []
function agg() {
let me = {
name: "Ousema",
surname: "Ben Farah",
ege: "21"
};
me.skills = []   //creo un array di nome skills nell'oggetto me
a.push(me)
}
agg()
console.log(a)


/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
var a = []
function agg() {
let b = {
name: "Ousema",
surname: "Ben Farah",
ege: "21"
};
b.skills =['ciao']   //aggiungo un elemento stringa all'array dell oggetto me
a.push(b)
}
agg()
console.log(a)

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
var a = []
function agg() {
let b = {
name: "Ousema",
surname: "Ben Farah",
ege: "21"
};
b.skills =['ciao','hello']
b.skills.pop() //uso il metodo pop per rimuovere l'ultimo elemento dell'array skills 
a.push(b)
}
agg()
console.log(a)

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
function dice () {
  num=Math.round(Math.random()*6);  //genero un numero casuale da 1 a 6 usando il metodo math.random
  console.log(num)
}
dice();

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
function whoIsBigger (a,b){
  if(a>b){   //uso un if per controllare quale tra i due numeri passati come parametro sia il più grande 
    console.log('il numero più grande è ' + a)
  }else if(b>a){
    console.log('il numero più grande è ' + b)
  }else {
    console.log('i numeri sono uguali ')
  }

}
whoIsBigger(5,6)
/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.
  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
const sliptMe = function (string){
  let split = string.split("\ ");  //uso metodo split per dividere la frase i n parole racchiudendole in dei singoli apici 

  console.log(split)
}
sliptMe("I Love Coding")

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
const deleteOne = function(Bool,String){
  if(true){    //creo un if per distinguere le condizioni e accedere in base al valore di bool 
      var d = String.split('') //assegno ad una variabile la stringa  splitata
      d.shift()                  //uso shift per rimuovere la prima lettera
      console.log(d)
  }else if(false) {
      var d = String.split('')
      d.pop()                     //uso pop per rimuovere l'ultima lettera
      console.log(d)
  }
}
deleteOne(false,"osema")

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
let onlyLetters = function(String){
  String = String.replace( '0',' ')       //ho creato una funzione in cui ho inserito un replace per ogni numero, così che mi rimpiazzasse qualsiasi numero con uno spazio...
  String = String.replace( '1',' ')
  String = String.replace( '2',' ')
  String = String.replace( '3',' ')
  String = String.replace( '4',' ')
  String = String.replace( '5',' ')
  String = String.replace( '6',' ')
  String = String.replace( '7',' ')
  String = String.replace( '8',' ')
  String = String.replace( '9',' ')
  return console.log(String)
}
onlyLetters('osema 987654321')


/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
function isThisAnEmail (String){

}

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
function whatDayIsIt (){
  var data = new Date();
  let d = data.getDay()     //uso il metodo get.day per ricavare il giorno della settimana sotto forma di numero, quindi successivamente creo un if in cui controllo tutti i numeri della settimana e in base al numero stampo in console il giorno corrispondente
if(d == 1){
  console.log("lunedi")
}else if(d == 2){
  console.log('martedi')
}else if(d == 3){
  console.log('mercoledi')
}else if(d == 4){
  console.log('giovedì')
}else if(d == 5){
  console.log('venerdi')
}else if(d == 6){
  console.log('sabato')
}else if(d == 7){
  console.log('domenica')
}}
whatDayIsIt()

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
function howManyDays (){
  var data = new Date();
var g, m, a;
g = data.getDate()+ "/";
m = data.getMonth()+ "/";
a = data.getFullYear()+ "/";
console.log("Oggi è il " + a + m + g);    //con i vari metodi mi faccio restituire la data di oggi 
let passato = new Date('2022/2/2')      //ad una variabile assegno una nuova data che successivamente andrò a controllare se è maggiore o minore alla data di oggi...in base alla condizione so se è una data futura o una data passata
if(data>passato){
    console.log('2022/2/2 è una data passata ')
}else {
    console.log('2022/2/2 è una data futura')
}
}
howManyDays()

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
function isTodayMyBirthday(d){
  let b = "23/09"     //creo una variabile in cui inserisco il giorno e il mese del mio compleanno, poi creo un if in cui nella condizione controllo se il giorno del mio compleano sia uguale al giorno e il mese che verrà inserito come parametro....se sono uguali allora sarà il giorno del mio compleanno se invece sono diverse non lo sarà
  if(d===b){
    console.log("true")
  }else{
    console.log("false")
  }

}
isTodayMyBirthday("23/09")

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
function DeleeteProp ()

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
const newestMovie = function () {
  let result = { Year: 0 }
  for (let i = 0; i < movies.length; i++) {
    let currentYear = parseInt(movies[i].Year) 
    console.log(currentYear)
    if (currentYear > result.Year) {
      result = movies[i]
    console.log(result)
    }
  }

  return result
}                                                                                                                                                                                                                                                                                             
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
function countMovies(){
  console.log('i film sono '+ movies.length) 
  }
  countMovies()
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
function onlyTheYears(){
  let arr =[]
  for (let i = 0; i < movies.length; i++){
    arr =+ movies[i].Year;
    console.log('questi sono gli anni di tutti i film ' + arr)
}

}
onlyTheYears()
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
function onlyInLastMillennium(){
   
  for(let i=0; i<movies.length;i++ ){  // faccio un ciclo per scorrere tutti i film
  if(movies[i].Year >= 1000 && movies[i].Year <= 200) // faccio un if e controllo se l'anno dei film rientra nel millennio scorso
  {
      let y =+ movies[i].Title          // creo una variabile in cui ad ogni film che faccia parte del millennio scorso aggiungo i titoli  
      console.log('tutti i film del millennio scorso sono i seguenti ' + y ) 
}
  }}
onlyInLastMillennium()
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
function sumAllTheYears(){
  let arr=[]
  for (let i=0; i<movies.length;i++){
    arr.push(movies[i].Year)
  }
  console.log(arr)
}sumAllTheYears()
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
function searchByTitle(nomeF){
  let NameMovies = [];
  let f;
  for(let i=0;i < movies.length; i++){ //ciclo tutti gli oggetti dell'array
    NameMovies.push(movies[i].Title); //push tutti i titoli dei film in un array 
  }
  f= NameMovies.filter(s => s.includes(nomeF));  //creo una variabile a cui assegno il film filtrato 
  console.log('film trovati; ' + f);
  return f;
}
searchByTitle('Avengers')

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]
