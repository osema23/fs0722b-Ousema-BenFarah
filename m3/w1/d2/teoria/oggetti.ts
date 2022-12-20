var persona = {
    firstname: "osema",
    lastname: "ben farah",
    sayHello :function(){} //type template
}
persona.sayHello = function() {
    console.log("hello " + persona.firstname)
}
persona.sayHello()


//console.log(persona.firstname)
//console.log(persona.lastname)
//persona.sayHello = function() {return "hello"} //restituisce errore perche non ho definito un tipo (type template)

//oggetti con parametri di funzione
var person = {
    firstname: "alessia",
    lastname: "Giummarra"
}
var invokeperson = function(obj: {firstname:string, lastname:string}){
    console.log("first name:"+obj.firstname)
    console.log("last name:"+obj.lastname)
}
invokeperson(person)

//classi
class Persona {
    nome:string;
    cognome:string;
    constructor(nome:string, cognome:string) {
        this.nome = nome;
        this.cognome = cognome;
    }
    visualizzaNomeCognome() {
        return this.nome + ' ' + this.cognome;
    }
}

class Car {
    // field
    engine:string;

    //constructor -Z è una funzione speciale di class che serve a inizializzare le variabili -> è una funzione quindi può avere parametri 
    constructor(engine:string) {
        this.engine = engine
    }

    //function 
    disp():void {
        console.log("Engine is : " +this.engine)
    }
}

//create  an object 
var obj = new Car("XXSY1")

//access field 
console.log("Leggo l'attributo del valore di Engine:" + obj.engine)

//access function
obj.disp()