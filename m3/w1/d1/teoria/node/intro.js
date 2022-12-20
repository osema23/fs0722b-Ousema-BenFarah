/*var num:number = 12; //inizializzo variabile e le assegno un valore
console.log (num)
var message:string = "hello world"
console.log(message)
*/
var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        console.log("Hello World !!!");
    };
    return Greeting;
}());
var obj = new Greeting();
obj.greet(); // il nuovo oggetto invoca il metodo greet
/*
1. Definisco una classe Greeting
2. Aggiungo un metodo greet()
3. i metodo stampa una stringa in console
4. la keyword new crea un oggetto della classe (obj)
5. l'oggetto invoca il metodo greet()
(se vi dice che Greeting è duplicata ci arriveremo non è un problema)
*/ 
